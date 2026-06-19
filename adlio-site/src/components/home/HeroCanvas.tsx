"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      const radius = 10 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i + 2] = radius * Math.cos(phi);

      // blue particles to match new accent
      const color = new THREE.Color("#3B82F6");
      color.multiplyScalar(0.3 + Math.random() * 0.5);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    return { pos, colors };
  });

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions.pos} colors={positions.colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.08}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
}