"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { EarbudsModel } from "./EarbudsModel";

/**
 * EarbudsScene
 */
export const EarbudsScene: FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        orthographic
        camera={{
          position: [0, 0, 10],
          zoom: 100,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight intensity={1} position={[10, 10, 10]} />
          <directionalLight intensity={0.5} position={[0, 0, -5]} />
          <EarbudsModel />
          <OrbitControls enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};
