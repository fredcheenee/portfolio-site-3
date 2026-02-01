import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FooterBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Configuration ---
    const COUNT = 200;
    const GRAVITY = -0.5; // Downward acceleration
    const DAMPING = 0.7; // Bounce energy loss
    const DRAG = 0.99; // Air resistance
    const WALL_BOUNCE = 0.7;
    const SPHERE_MIN_SIZE = 12;
    const SPHERE_MAX_SIZE = 24;
    
    // Theme Colors
    const PALETTE = [
      0xffffff, // White
      0x4ade80, // Green (Brand)
      0x111827, // Dark Gray
      0xcccccc, // Light Gray
      0x22c55e, // Green 600
    ];

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(50, containerRef.current.clientWidth / containerRef.current.clientHeight, 1, 1000);
    camera.position.z = 400; // Distance

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    // --- Physics Objects ---
    interface SphereData {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: number;
    }

    const spheres: SphereData[] = [];
    const dummy = new THREE.Object3D();
    
    // Initialize Spheres
    for (let i = 0; i < COUNT; i++) {
      spheres.push({
        x: (Math.random() - 0.5) * 200,
        y: 200 + Math.random() * 200, // Start above
        z: (Math.random() - 0.5) * 50, // Shallow depth
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: (Math.random() - 0.5) * 2,
        radius: SPHERE_MIN_SIZE + Math.random() * (SPHERE_MAX_SIZE - SPHERE_MIN_SIZE),
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)]
      });
    }

    // Instanced Mesh for performance
    const geometry = new THREE.SphereGeometry(1, 16, 16);
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.2,
      metalness: 0.1,
    });
    
    const mesh = new THREE.InstancedMesh(geometry, material, COUNT);
    
    // Set initial colors
    for (let i = 0; i < COUNT; i++) {
        dummy.position.set(0,0,0); // Reset dummy
        mesh.setColorAt(i, new THREE.Color(spheres[i].color));
    }
    mesh.instanceColor!.needsUpdate = true; // Fix for Three.js TS types
    scene.add(mesh);


    // --- Physics Engine (Simple Verlet-like) ---
    const updatePhysics = () => {
      // Boundaries based on approximate visible area at z=0
      // Calculate view bounds at z=0 based on camera FOV and distance
      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const height = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const width = height * camera.aspect;
      
      const bounds = {
        left: -width / 2,
        right: width / 2,
        top: height / 2,
        bottom: -height / 2,
        front: 50,
        back: -50
      };

      for (let i = 0; i < COUNT; i++) {
        const s = spheres[i];

        // Apply Forces
        s.vy += GRAVITY;
        s.vx *= DRAG;
        s.vy *= DRAG;
        s.vz *= DRAG;

        // Update Position
        s.x += s.vx;
        s.y += s.vy;
        s.z += s.vz;

        // --- Wall Collisions ---
        // Floor
        if (s.y - s.radius < bounds.bottom) {
          s.y = bounds.bottom + s.radius;
          s.vy *= -DAMPING;
        }
        // Ceiling (Open top usually, but let's bound it for packing)
        // if (s.y + s.radius > bounds.top) { s.y = bounds.top - s.radius; s.vy *= -DAMPING; }

        // Walls
        if (s.x - s.radius < bounds.left) {
          s.x = bounds.left + s.radius;
          s.vx *= -WALL_BOUNCE;
        }
        if (s.x + s.radius > bounds.right) {
          s.x = bounds.right - s.radius;
          s.vx *= -WALL_BOUNCE;
        }

        // Z-Walls (Glass panes front/back)
        if (s.z - s.radius < bounds.back) {
          s.z = bounds.back + s.radius;
          s.vz *= -WALL_BOUNCE;
        }
        if (s.z + s.radius > bounds.front) {
          s.z = bounds.front - s.radius;
          s.vz *= -WALL_BOUNCE;
        }

        // --- Sphere-Sphere Collisions (Naive O(N^2)) ---
        for (let j = i + 1; j < COUNT; j++) {
            const s2 = spheres[j];
            const dx = s2.x - s.x;
            const dy = s2.y - s.y;
            const dz = s2.z - s.z;
            const distSq = dx*dx + dy*dy + dz*dz;
            const minDist = s.radius + s2.radius;

            if (distSq < minDist * minDist) {
                const dist = Math.sqrt(distSq);
                const overlap = minDist - dist;
                
                // Normal
                const nx = dx / dist;
                const ny = dy / dist;
                const nz = dz / dist;

                // Separate
                const moveX = nx * overlap * 0.5;
                const moveY = ny * overlap * 0.5;
                const moveZ = nz * overlap * 0.5;

                s.x -= moveX;
                s.y -= moveY;
                s.z -= moveZ;
                s2.x += moveX;
                s2.y += moveY;
                s2.z += moveZ;

                // Exchange Momentum (Simple elastic)
                // Vector reflection logic simplified: push apart velocities
                const vRelX = s.vx - s2.vx;
                const vRelY = s.vy - s2.vy;
                const vRelZ = s.vz - s2.vz;
                
                // Impulse (not physically perfect but visually close for packing)
                const impactSpeed = vRelX * nx + vRelY * ny + vRelZ * nz;
                if (impactSpeed > 0) {
                     const impulse = impactSpeed * 0.8; // Restitution
                     s.vx -= nx * impulse;
                     s.vy -= ny * impulse;
                     s.vz -= nz * impulse;
                     s2.vx += nx * impulse;
                     s2.vy += ny * impulse;
                     s2.vz += nz * impulse;
                }
            }
        }

        // Apply to Mesh
        dummy.position.set(s.x, s.y, s.z);
        dummy.scale.set(s.radius, s.radius, s.radius);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    };

    // --- Animation Loop ---
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      updatePhysics();
      renderer.render(scene, camera);
    };
    animate();

    // --- Resize Handler ---
    const handleResize = () => {
        if (!containerRef.current) return;
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Interaction (Randomize Colors & Bump) ---
    const handleClick = () => {
       // Randomize colors
       for (let i = 0; i < COUNT; i++) {
         const newColor = PALETTE[Math.floor(Math.random() * PALETTE.length)];
         spheres[i].color = newColor;
         mesh.setColorAt(i, new THREE.Color(newColor));
         
         // Add a little upward "pop" to shake things up
         spheres[i].vy += Math.random() * 15; 
         spheres[i].vx += (Math.random() - 0.5) * 10;
         spheres[i].vz += (Math.random() - 0.5) * 10;
       }
       mesh.instanceColor!.needsUpdate = true;
    };
    
    // Attach listener to container (since canvas captures clicks)
    const container = containerRef.current;
    container.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleClick);
      cancelAnimationFrame(reqId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
        ref={containerRef} 
        className="absolute inset-0 z-0 overflow-hidden cursor-pointer"
        style={{
             background: 'var(--bg-footer-gradient, radial-gradient(circle at center, #222 0%, #000 100%))'
        }}
    />
  );
};

export default FooterBackground;