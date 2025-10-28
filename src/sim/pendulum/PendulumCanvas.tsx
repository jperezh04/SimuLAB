// src/sim/pendulum/PendulumCanvas.tsx
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { usePendulumSim } from "./store";

function ScenePendulum() {
  const bob = useRef<THREE.Group>(null!);
  const rod = useRef<THREE.Mesh>(null!);

  const step = usePendulumSim(s => s.step);

  useEffect(() => {
    // nada extra aquí
  }, []);

  useFrame((_, delta) => {
    step(delta);
    const st = usePendulumSim.getState();
    const x = st.params.L * Math.sin(st.state.theta);
    const y = -st.params.L * Math.cos(st.state.theta);
    if (bob.current) bob.current.position.set(x, y, 0);
    if (rod.current) {
      rod.current.scale.set(1, Math.max(st.params.L, 0.0001), 1);
      rod.current.rotation.z = st.state.theta;
      rod.current.position.set(x / 2, y / 2, 0);
    }
  });

  return (
    <>
      {/* Fondo de la escena (oscuro elegante) */}
      <color attach="background" args={["#0b1220"]} />

      {/* Luces */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 3, 2]} intensity={0.9} />

      {/* Piso sutil */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      {/* Pivote */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>

      {/* Varilla */}
      <mesh ref={rod}>
        <cylinderGeometry args={[0.012, 0.012, 1, 20]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>

      {/* Bola */}
      <group ref={bob}>
        <mesh>
          <sphereGeometry args={[0.065, 32, 32]} />
          <meshStandardMaterial color="#d1d5db" />
        </mesh>
      </group>

      <Environment preset="city" />
      <OrbitControls enablePan={false} />
    </>
  );
}

type CanvasProps = {
  /** clase de altura (ej. 'h-[70vh]') o combinación responsive */
  heightClass?: string;
};

export const PendulumCanvas: React.FC<CanvasProps> = ({ heightClass = "h-[65vh] md:h-[72vh] xl:h-[78vh]" }) => {
  return (
    <div className={`w-full ${heightClass} rounded-2xl overflow-hidden`}>
      {/* ❗️sin border ni aspect-video aquí */}
      <Canvas camera={{ position: [1.2, 0.8, 1.6], fov: 50 }}>
        <ScenePendulum />
      </Canvas>
    </div>
  );
};
