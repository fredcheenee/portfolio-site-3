import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, events, extend, useFrame, useThree, type ThreeElement } from '@react-three/fiber';
import { Environment, Lightformer, RoundedBox } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RapierRigidBody,
  type RigidBodyProps,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>;
  }
}

// Card size in world units. The textures are drawn at the same ratio.
const CARD_W = 1.6;
const CARD_H = 2.25;
// How far a drag may take the card from the centre, in world units
const DRAG_X = 0.7;
const DRAG_Y = 1.1;
const TEX_W = 1024;
const TEX_H = 1440;
const CORNER = 48;
// Same corner radius on the plastic body so the texture corners line up with it
const CORNER_WORLD = (CORNER / TEX_W) * CARD_W;
const BLACK = '#111111';
const WHITE = '#ffffff';
const LINE = '#d9d9d9';
const FONT = 'Inter, system-ui, sans-serif';

type JointBody = RapierRigidBody & { lerped?: THREE.Vector3 };

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement | null>((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function toTexture(canvas: HTMLCanvasElement) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  return tex;
}

// Black and white version of the photo with a bit more contrast, like a passport print
function monochrome(photo: HTMLImageElement, w: number, h: number) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  const scale = Math.max(w / photo.width, h / photo.height);
  const sw = w / scale;
  const sh = h / scale;
  ctx.drawImage(photo, (photo.width - sw) / 2, (photo.height - sh) / 2 - sh * 0.04, sw, sh, 0, 0, w, h);
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const l = 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
    const v = Math.max(0, Math.min(255, (l - 128) * 1.18 + 128));
    d[i] = d[i + 1] = d[i + 2] = v;
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

// Fake barcode: fixed pattern so it looks the same every load
function barcode(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
  const bars = [3, 1, 1, 2, 1, 3, 1, 1, 1, 2, 2, 1, 3, 1, 1, 1, 2, 1, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1, 1, 2, 1, 1, 3, 1, 2, 1, 1, 1, 2, 3, 1, 1];
  const unit = w / bars.reduce((a, b) => a + b, 0) / 1.6;
  ctx.fillStyle = color;
  let cx = x;
  bars.forEach((b, i) => {
    if (i % 2 === 0) ctx.fillRect(cx, y, b * unit, h);
    cx += b * unit * 1.6;
  });
}

function slot(ctx: CanvasRenderingContext2D, color: string) {
  ctx.fillStyle = color;
  roundRect(ctx, TEX_W / 2 - 100, 44, 200, 34, 17);
  ctx.fill();
}

function drawFront(photo: HTMLImageElement | null) {
  const c = document.createElement('canvas');
  c.width = TEX_W;
  c.height = TEX_H;
  const ctx = c.getContext('2d')!;

  ctx.fillStyle = WHITE;
  roundRect(ctx, 0, 0, TEX_W, TEX_H, CORNER);
  ctx.fill();
  slot(ctx, BLACK);

  // Small header row
  ctx.fillStyle = '#333333';
  ctx.font = `700 36px ${FONT}`;
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  ctx.fillText('FREDIMATE', 80, 164);
  ctx.textAlign = 'right';
  ctx.fillText('NO. 001', TEX_W - 80, 164);

  // Photo
  const pw = TEX_W - 160;
  const ph = 760;
  const px = 80;
  const py = 200;
  ctx.save();
  roundRect(ctx, px, py, pw, ph, 20);
  ctx.clip();
  ctx.fillStyle = '#e8e8e8';
  ctx.fillRect(px, py, pw, ph);
  if (photo) ctx.drawImage(monochrome(photo, pw, ph), px, py);
  ctx.restore();

  // Name and title
  ctx.textAlign = 'left';
  ctx.fillStyle = BLACK;
  ctx.font = `700 124px ${FONT}`;
  ctx.fillText('Fred D.', 76, 1078);
  ctx.fillStyle = '#222222';
  ctx.font = `600 62px ${FONT}`;
  ctx.fillText('Automation Specialist', 80, 1158);

  // Rule, barcode and site
  ctx.fillStyle = LINE;
  ctx.fillRect(80, 1216, TEX_W - 160, 3);
  barcode(ctx, 80, 1262, 440, 90, BLACK);
  ctx.textAlign = 'right';
  ctx.fillStyle = BLACK;
  ctx.font = `700 40px ${FONT}`;
  ctx.fillText('fredimate.com', TEX_W - 80, 1322);

  return toTexture(c);
}

function drawBack() {
  const c = document.createElement('canvas');
  c.width = TEX_W;
  c.height = TEX_H;
  const ctx = c.getContext('2d')!;

  ctx.fillStyle = BLACK;
  roundRect(ctx, 0, 0, TEX_W, TEX_H, CORNER);
  ctx.fill();
  slot(ctx, '#3a3a3a');

  ctx.textAlign = 'left';
  ctx.fillStyle = '#bbbbbb';
  ctx.font = `700 36px ${FONT}`;
  ctx.fillText('WHAT I BUILD', 80, 230);

  ctx.fillStyle = WHITE;
  ctx.font = `700 84px ${FONT}`;
  ['Lead capture', 'CRM + booking', 'Follow-ups', 'AI agents'].forEach((line, i) => {
    ctx.fillText(line, 76, 340 + i * 112);
  });

  ctx.fillStyle = '#bbbbbb';
  ctx.font = `700 36px ${FONT}`;
  ctx.fillText('BUILT WITH', 80, 860);
  ctx.fillStyle = WHITE;
  ctx.font = `600 54px ${FONT}`;
  ctx.fillText('n8n, Make, GoHighLevel', 80, 945);
  ctx.fillText('and custom code', 80, 1015);

  ctx.fillStyle = '#3a3a3a';
  ctx.fillRect(80, 1216, TEX_W - 160, 3);
  barcode(ctx, 80, 1262, 440, 90, WHITE);
  ctx.textAlign = 'right';
  ctx.fillStyle = WHITE;
  ctx.font = `700 40px ${FONT}`;
  ctx.fillText('fredimate.com', TEX_W - 80, 1322);

  return toTexture(c);
}

function drawBand() {
  const c = document.createElement('canvas');
  c.width = 2048;
  c.height = 96;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = BLACK;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = WHITE;
  ctx.font = `700 48px ${FONT}`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ['F R E D I M A T E', '•', 'A U T O M A T I O N', '•'].forEach((t, i) => {
    ctx.fillText(t, (c.width / 4) * i + c.width / 8, c.height / 2 + 2);
  });
  const tex = toTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function useBadgeTextures() {
  const [tex, setTex] = useState<{ front: THREE.Texture; back: THREE.Texture; band: THREE.Texture } | null>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      await document.fonts.ready;
      await Promise.all([`700 100px ${FONT}`, `600 60px ${FONT}`].map((f) => document.fonts.load(f).catch(() => null)));
      const photo = await loadImage('/images/fred.webp');
      const front = drawFront(photo);
      const back = drawBack();
      const band = drawBand();
      // The card caps are UV-mapped in card units (x from -0.8 to 0.8), so scale the print to fit.
      // The back is seen from behind, so it is mirrored to read the right way round.
      front.repeat.set(1 / CARD_W, 1 / CARD_H);
      front.offset.set(0.5, 0.5);
      back.repeat.set(-1 / CARD_W, 1 / CARD_H);
      back.offset.set(0.5, 0.5);
      if (!cancelled) setTex({ front, back, band });
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return tex;
}

const wrapPi = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef<THREE.Mesh<MeshLineGeometry, MeshLineMaterial>>(null);
  const fixed = useRef<JointBody>(null);
  const j1 = useRef<JointBody>(null);
  const j2 = useRef<JointBody>(null);
  const j3 = useRef<JointBody>(null);
  const card = useRef<JointBody>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const quat = new THREE.Quaternion();
  const normal = new THREE.Vector3();
  const hook = new THREE.Vector3();

  const { width, height } = useThree((s) => s.size);
  const resolution = useMemo(() => new THREE.Vector2(width, height), [width, height]);
  const [bandRepeat] = useState(() => new THREE.Vector2(-2, 1));
  const textures = useBadgeTextures();
  const [curve] = useState(
    () => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, setDragged] = useState<THREE.Vector3 | false>(false);
  const [hovered, setHovered] = useState(false);
  const downAt = useRef<{ x: number; y: number } | null>(null);
  // Which side faces the screen. A tap toggles it and the card stays there until the next tap.
  const flipped = useRef(false);
  const kick = useRef(false);

  const segmentProps = useMemo<RigidBodyProps>(() => ({ type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 }), []);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, CARD_H / 2 + 0.32, 0]]);

  useEffect(() => {
    if (!hovered) return;
    document.body.style.cursor = dragged ? 'grabbing' : 'grab';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && card.current) {
      // Where the pointer is on a plane at the card's own depth, so a drag never pushes the
      // card forward or back (which the rope would then snap back with a hard bounce)
      state.raycaster.setFromCamera(state.pointer, state.camera);
      dragPlane.constant = -card.current.translation().z;
      if (!state.raycaster.ray.intersectPlane(dragPlane, vec)) return;
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      // Keep a drag near the badge's own column; after release it may swing as far as it likes
      card.current.setNextKinematicTranslation({
        x: THREE.MathUtils.clamp(vec.x - dragged.x, -DRAG_X, DRAG_X),
        y: THREE.MathUtils.clamp(vec.y - dragged.y, -DRAG_Y, DRAG_Y),
        z: -dragPlane.constant,
      });
    }
    if (fixed.current && j1.current && j2.current && j3.current && card.current && band.current) {
      // Smooth the two middle joints so the strap does not jitter
      [j1, j2].forEach((ref) => {
        const body = ref.current!;
        if (!body.lerped) body.lerped = new THREE.Vector3().copy(body.translation());
        const dist = Math.max(0.1, Math.min(1, body.lerped.distanceTo(body.translation())));
        body.lerped.lerp(body.translation(), Math.min(1, delta * (minSpeed + dist * (maxSpeed - minSpeed))));
      });
      // The strap ends just behind the card, inside the clip holder, read from the card itself.
      // The ribbon's end cap folds unpredictably frame to frame, so it is kept out of sight
      // behind the card and holder. "Behind" is away from the camera in world space, not the
      // card's own back, so it stays hidden when the card is flipped round.
      const q = card.current.rotation();
      quat.set(q.x, q.y, q.z, q.w);
      // The end sits well below the holder's top edge: the ribbon's last segment is about 0.1
      // long and its fold must stay behind the card too, not just inside the holder.
      hook.set(0, CARD_H / 2 - 0.25, 0).applyQuaternion(quat).add(card.current.translation() as THREE.Vector3);
      hook.z -= 0.06;
      curve.points[0].copy(hook);
      curve.points[1].copy(j2.current.lerped!);
      curve.points[2].copy(j1.current.lerped!);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      // A tap wakes the card so the steering below can turn it
      if (kick.current && !dragged && card.current.bodyType() === 0) {
        kick.current = false;
        card.current.wakeUp();
      }
      // Turn the card to whichever side is chosen. The angle is read from the card's normal so a
      // full 180 flip has a real target. The spin speed is set in proportion to the remaining
      // angle, so it slows into place with no overshoot.
      normal.set(0, 0, 1).applyQuaternion(quat);
      const yaw = Math.atan2(normal.x, normal.z);
      const err = wrapPi(yaw - (flipped.current ? Math.PI : 0));
      // Only steer while the card is awake. Waking it every frame kept the joints solving
      // forever, which made the strap end jitter at rest.
      // Inside a quarter of a degree the steering stops, otherwise its tiny push keeps the
      // whole chain awake and the strap end twitches instead of settling.
      if (!card.current.isSleeping()) {
        ang.copy(card.current.angvel());
        card.current.setAngvel({ x: ang.x, y: Math.abs(err) < 0.004 ? 0 : THREE.MathUtils.clamp(-err * 9, -10, 10), z: ang.z }, false);
      }
    }
  });

  curve.curveType = 'chordal';

  const onDown = (e: any) => {
    e.stopPropagation();
    e.target.setPointerCapture(e.pointerId);
    downAt.current = { x: e.clientX, y: e.clientY };
    setDragged(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current!.translation())));
  };
  const onUp = (e: any) => {
    e.stopPropagation();
    e.target.releasePointerCapture(e.pointerId);
    setDragged(false);
    // A tap without a drag flips the card to the other side
    const d = downAt.current;
    if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) < 6) {
      flipped.current = !flipped.current;
      kick.current = true;
    }
    downAt.current = null;
  };

  const plastic = { roughness: 0.55, clearcoat: 0.5, clearcoatRoughness: 0.3 };
  const metal = { color: '#2b2b2b', metalness: 0.95, roughness: 0.3 };
  const [bodyGeometry] = useState(() => {
    const r = CORNER_WORLD;
    const shape = new THREE.Shape();
    const x = -CARD_W / 2;
    const y = -CARD_H / 2;
    shape.moveTo(x + r, y);
    shape.lineTo(x + CARD_W - r, y);
    shape.quadraticCurveTo(x + CARD_W, y, x + CARD_W, y + r);
    shape.lineTo(x + CARD_W, y + CARD_H - r);
    shape.quadraticCurveTo(x + CARD_W, y + CARD_H, x + CARD_W - r, y + CARD_H);
    shape.lineTo(x + r, y + CARD_H);
    shape.quadraticCurveTo(x, y + CARD_H, x, y + CARD_H - r);
    shape.lineTo(x, y + r);
    shape.quadraticCurveTo(x, y, x + r, y);
    return new THREE.ExtrudeGeometry(shape, { depth: 0.015, bevelEnabled: false });
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.1, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0.2, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0.3, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0.4, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[CARD_W / 2, CARD_H / 2, 0.01]} />
          <group
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerDown={onDown}
            onPointerUp={onUp}
          >
            {/* Two flat halves. The print goes straight onto each half's cap (material 0) and the
                edge is material 1, so there are no overlapping surfaces to fight over depth. */}
            <mesh geometry={bodyGeometry} castShadow key={textures ? 'front-print' : 'front-blank'}>
              <meshPhysicalMaterial attach="material-0" map={textures?.front} color={textures ? '#ffffff' : '#f4f4f4'} {...plastic} />
              <meshPhysicalMaterial attach="material-1" color="#f4f4f4" {...plastic} />
            </mesh>
            {/* The black side is unlit so it stays black instead of reflecting the light as grey */}
            <mesh geometry={bodyGeometry} position={[0, 0, -0.015]} castShadow key={textures ? 'back-print' : 'back-blank'}>
              <meshBasicMaterial attach="material-0" map={textures?.back} color={textures ? '#ffffff' : BLACK} />
              <meshBasicMaterial attach="material-1" color={BLACK} />
            </mesh>
            {/* Clip: a flat strap holder, a ring, and the hook that joins the strap */}
            {/* The strap passes into this holder. Along that seam both surfaces share a depth and the
                GPU picks a different winner each frame (a flickering line), so the holder is biased
                a little toward the camera and always wins. */}
            <RoundedBox args={[0.44, 0.16, 0.16]} radius={0.02} smoothness={3} position={[0, CARD_H / 2 + 0.05, 0]} castShadow>
              <meshStandardMaterial {...metal} polygonOffset polygonOffsetFactor={-4} polygonOffsetUnits={-4} />
            </RoundedBox>
            <mesh position={[0, CARD_H / 2 + 0.21, 0]} castShadow>
              <torusGeometry args={[0.085, 0.02, 12, 32]} />
              <meshStandardMaterial {...metal} />
            </mesh>
            <mesh position={[0, CARD_H / 2 + 0.31, 0]} castShadow>
              <cylinderGeometry args={[0.035, 0.035, 0.1, 16]} />
              <meshStandardMaterial {...metal} />
            </mesh>
          </group>
        </RigidBody>
      </group>
      {/* Invisible wall behind the card that only shows the card's shadow */}
      <mesh position={[0, 0, -0.45]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        {/* depthWrite off: the wall is invisible, so it must never hide the card when it swings behind it */}
        <shadowMaterial transparent opacity={0.18} color="#000000" depthWrite={false} />
      </mesh>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          resolution={resolution}
          useMap={textures ? 1 : 0}
          map={textures?.band}
          repeat={bandRepeat}
          lineWidth={1.05}
        />
      </mesh>
    </>
  );
}

const Lanyard: React.FC<{ className?: string }> = ({ className }) => {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Stop rendering when the hero is scrolled out of view
  useEffect(() => {
    if (!wrap.current) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(wrap.current);
    return () => io.disconnect();
  }, []);

  // The canvas is much wider than the badge's column so a hard swing is never cut off at its
  // edge. It must not swallow clicks on the text under it, so the canvas itself ignores the
  // pointer and the scene listens on the page body instead, mapping positions onto the canvas.
  const makeEvents = (store: Parameters<typeof events>[0]) => ({
    ...events(store),
    compute: (event: { clientX: number; clientY: number }, state: { gl: THREE.WebGLRenderer; pointer: THREE.Vector2; raycaster: THREE.Raycaster; camera: THREE.Camera }) => {
      const rect = state.gl.domElement.getBoundingClientRect();
      state.pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
      state.raycaster.setFromCamera(state.pointer, state.camera);
    },
  });

  return (
    <div ref={wrap} className={className} style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 25, near: 1, far: 60 }}
        flat
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        shadows={{ type: THREE.VSMShadowMap }}
        frameloop={visible ? 'always' : 'never'}
        eventSource={document.body}
        events={makeEvents}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={1} />
        {/* Light from the upper left so the shadow falls down and to the right, like a real badge on a wall */}
        <directionalLight
          position={[-1.5, 3, 10]}
          intensity={0.9}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-radius={10}
          shadow-blurSamples={16}
          shadow-bias={-0.0004}
          shadow-camera-left={-8}
          shadow-camera-right={8}
          shadow-camera-top={8}
          shadow-camera-bottom={-8}
          shadow-camera-near={1}
          shadow-camera-far={25}
        />
        <Physics gravity={[0, -40, 0]} timeStep={isMobile ? 1 / 30 : 1 / 60} paused={!visible}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
};

export default Lanyard;
