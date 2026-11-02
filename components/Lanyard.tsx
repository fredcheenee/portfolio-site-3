import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useFrame, useThree, type ThreeElement } from '@react-three/fiber';
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
const TEX_W = 800;
const TEX_H = 1125;
const GREEN = '#1f7a4d';
const GREEN_SOFT = '#e3f1e9';
const INK = '#141815';
const MUTED = '#5d655f';

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
  tex.anisotropy = 8;
  return tex;
}

async function drawFront(photo: HTMLImageElement | null) {
  const c = document.createElement('canvas');
  c.width = TEX_W;
  c.height = TEX_H;
  const ctx = c.getContext('2d')!;

  ctx.fillStyle = '#ffffff';
  roundRect(ctx, 0, 0, TEX_W, TEX_H, 40);
  ctx.fill();

  // Slot the clip goes through
  ctx.fillStyle = '#dfe4de';
  roundRect(ctx, TEX_W / 2 - 80, 40, 160, 26, 13);
  ctx.fill();

  ctx.textAlign = 'center';
  ctx.fillStyle = INK;
  ctx.font = '700 72px Inter, system-ui, sans-serif';
  ctx.fillText('Fred D.', TEX_W / 2, 170);

  // Photo, square crop from the centre
  const size = 520;
  const px = (TEX_W - size) / 2;
  const py = 220;
  ctx.save();
  roundRect(ctx, px, py, size, size, 28);
  ctx.clip();
  ctx.fillStyle = GREEN_SOFT;
  ctx.fillRect(px, py, size, size);
  if (photo) {
    const s = Math.min(photo.width, photo.height);
    ctx.drawImage(photo, (photo.width - s) / 2, (photo.height - s) / 2, s, s, px, py, size, size);
  }
  ctx.restore();

  ctx.fillStyle = INK;
  ctx.font = '600 52px Inter, system-ui, sans-serif';
  ctx.fillText('Automation', TEX_W / 2, 840);
  ctx.fillText('Specialist', TEX_W / 2, 902);

  // Bottom strip
  ctx.save();
  roundRect(ctx, 0, 0, TEX_W, TEX_H, 40);
  ctx.clip();
  ctx.fillStyle = GREEN;
  ctx.fillRect(0, TEX_H - 130, TEX_W, 130);
  ctx.restore();
  ctx.fillStyle = '#ffffff';
  ctx.font = '600 40px Inter, system-ui, sans-serif';
  ctx.fillText('fredimate.com', TEX_W / 2, TEX_H - 52);

  return toTexture(c);
}

function drawBack() {
  const c = document.createElement('canvas');
  c.width = TEX_W;
  c.height = TEX_H;
  const ctx = c.getContext('2d')!;

  ctx.fillStyle = GREEN;
  roundRect(ctx, 0, 0, TEX_W, TEX_H, 40);
  ctx.fill();

  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  roundRect(ctx, TEX_W / 2 - 80, 40, 160, 26, 13);
  ctx.fill();

  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '600 34px Inter, system-ui, sans-serif';
  ctx.fillText('WHAT I BUILD', 80, 190);

  ctx.fillStyle = '#ffffff';
  ctx.font = '700 60px Inter, system-ui, sans-serif';
  ['Lead capture', 'CRM + booking', 'Follow-ups', 'AI agents'].forEach((line, i) => {
    ctx.fillText(line, 80, 290 + i * 88);
  });

  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '600 34px Inter, system-ui, sans-serif';
  ctx.fillText('BUILT WITH', 80, 720);
  ctx.fillStyle = '#ffffff';
  ctx.font = '500 44px Inter, system-ui, sans-serif';
  ctx.fillText('n8n, Make, GoHighLevel', 80, 790);
  ctx.fillText('and custom code', 80, 850);

  ctx.textAlign = 'center';
  ctx.font = '600 40px Inter, system-ui, sans-serif';
  ctx.fillText('fredimate.com', TEX_W / 2, TEX_H - 52);

  return toTexture(c);
}

function drawBand() {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 64;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = GREEN;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 30px Inter, system-ui, sans-serif';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ['FREDIMATE', '•', 'AUTOMATION', '•'].forEach((t, i) => {
    ctx.fillText(t, (c.width / 4) * i + c.width / 8, c.height / 2 + 1);
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
      const photo = await loadImage('/images/fred.webp');
      const front = await drawFront(photo);
      const back = drawBack();
      const band = drawBand();
      if (!cancelled) setTex({ front, back, band });
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return tex;
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef<THREE.Mesh<MeshLineGeometry, MeshLineMaterial>>(null);
  const fixed = useRef<JointBody>(null);
  const j1 = useRef<JointBody>(null);
  const j2 = useRef<JointBody>(null);
  const j3 = useRef<JointBody>(null);
  const card = useRef<JointBody>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const { width, height } = useThree((s) => s.size);
  const textures = useBadgeTextures();
  const [curve] = useState(
    () => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, setDragged] = useState<THREE.Vector3 | false>(false);
  const [hovered, setHovered] = useState(false);
  const downAt = useRef<{ x: number; y: number } | null>(null);
  const spin = useRef(false);

  const segmentProps: RigidBodyProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };

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
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      // Keep the card inside the canvas so it never gets cut off at the edge
      const halfW = Math.max(0, state.viewport.width / 2 - CARD_W / 2 - 0.05);
      const halfH = Math.max(0, state.viewport.height / 2 - CARD_H / 2 - 0.05);
      card.current.setNextKinematicTranslation({
        x: THREE.MathUtils.clamp(vec.x - dragged.x, -halfW, halfW),
        y: THREE.MathUtils.clamp(vec.y - dragged.y, -halfH, halfH),
        z: vec.z - dragged.z,
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
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped!);
      curve.points[2].copy(j1.current.lerped!);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      // Torque only works once the card is dynamic again, so the tap spin waits for the next frame
      if (spin.current && !dragged && card.current.bodyType() === 0) {
        spin.current = false;
        card.current.applyTorqueImpulse({ x: 0, y: 0.35, z: 0 }, true);
      }
      // Ease the card back to facing the screen
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true);
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
    // A tap without a drag spins the card so the back shows
    const d = downAt.current;
    if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) < 6) {
      spin.current = true;
    }
    downAt.current = null;
  };

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
            <RoundedBox args={[CARD_W, CARD_H, 0.02]} radius={0.008} smoothness={2}>
              <meshPhysicalMaterial color="#ffffff" roughness={0.4} clearcoat={1} clearcoatRoughness={0.15} />
            </RoundedBox>
            {textures && (
              <>
                <mesh position={[0, 0, 0.0105]}>
                  <planeGeometry args={[CARD_W, CARD_H]} />
                  <meshPhysicalMaterial map={textures.front} transparent roughness={0.6} clearcoat={0.4} clearcoatRoughness={0.3} />
                </mesh>
                <mesh position={[0, 0, -0.0105]} rotation={[0, Math.PI, 0]}>
                  <planeGeometry args={[CARD_W, CARD_H]} />
                  <meshPhysicalMaterial map={textures.back} transparent roughness={0.6} clearcoat={0.4} clearcoatRoughness={0.3} />
                </mesh>
              </>
            )}
            {/* Metal clip */}
            <mesh position={[0, CARD_H / 2 + 0.06, 0]}>
              <boxGeometry args={[0.34, 0.16, 0.05]} />
              <meshStandardMaterial color="#c9ccc8" metalness={0.9} roughness={0.25} />
            </mesh>
            <mesh position={[0, CARD_H / 2 + 0.22, 0]}>
              <torusGeometry args={[0.09, 0.022, 12, 32]} />
              <meshStandardMaterial color="#c9ccc8" metalness={0.9} roughness={0.25} />
            </mesh>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={new THREE.Vector2(width, height)}
          useMap={textures ? 1 : 0}
          map={textures?.band}
          repeat={new THREE.Vector2(-4, 1)}
          lineWidth={1}
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

  return (
    <div ref={wrap} className={className}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 25 }}
        flat
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        frameloop={visible ? 'always' : 'never'}
        style={{ touchAction: isMobile ? 'pan-y' : 'none' }}
      >
        <ambientLight intensity={1.1} />
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
