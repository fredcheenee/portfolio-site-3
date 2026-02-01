import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const HeroBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Explicitly set position to absolute to ensure it sits correctly in the container
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    
    containerRef.current.appendChild(renderer.domElement);

    // --- Geometry Construction ---
    // Using BufferGeometry as Geometry is deprecated in newer Three.js versions
    const geometry = new THREE.BufferGeometry();
    const count = 1600;
    const positions = new Float32Array(count * 3);
    const distance = Math.min(200, window.innerWidth / 4);

    for (let i = 0; i < count; i++) {
      // Logic from user snippet:
      // var theta = Math.acos(THREE.Math.randFloatSpread(2)); 
      // var phi = THREE.Math.randFloatSpread(360); 
      // Note: THREE.Math is deprecated, using THREE.MathUtils
      
      const theta = Math.acos(THREE.MathUtils.randFloatSpread(2));
      const phi = THREE.MathUtils.randFloatSpread(360);

      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ 
      color: 0x0ae448, // Keeping the requested color
      size: 2,
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(geometry, material);
    
    // Grouping structure from snippet
    const renderingParent = new THREE.Group();
    renderingParent.add(particles);

    const resizeContainer = new THREE.Group();
    resizeContainer.add(renderingParent);
    scene.add(resizeContainer);

    // Shift to the right to clear text area
    resizeContainer.position.x = 250;

    camera.position.z = 400;

    // --- GSAP Animations ---
    const animProps = { scale: 1, xRot: 0, yRot: 0 };

    // Scaling animation
    const scaleTween = gsap.to(animProps, {
      duration: 10,
      scale: 1.3,
      repeat: -1,
      yoyo: true,
      ease: "sine",
      onUpdate: function() {
        renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale);
      }
    });

    // Rotation animation
    const rotateTween = gsap.to(animProps, {
      duration: 120,
      xRot: Math.PI * 2,
      yRot: Math.PI * 4,
      repeat: -1,
      yoyo: true,
      ease: "none",
      onUpdate: function() {
        renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
      }
    });

    // --- Interaction ---
    let mouseTween: gsap.core.Tween;
    
    const onMouseMove = (event: MouseEvent) => {
      if (mouseTween) mouseTween.kill();
      
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      mouseTween = gsap.to(particles.rotation, {
        duration: 0.1, 
        x: mouseY * -1, 
        y: mouseX
      });
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    // --- Render Loop ---
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(reqId);
      
      scaleTween.kill();
      rotateTween.kill();
      if (mouseTween) mouseTween.kill();
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden" />;
};

export default HeroBackground;