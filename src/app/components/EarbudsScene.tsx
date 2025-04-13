"use client";

import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { EarbudsModel } from "./EarbudsModel";

/**
 * EarbudsScene
 */
export const EarbudsScene: FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, 10],
          zoom: 10,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <directionalLight intensity={1.2} position={[10, 10, 10]} />
          <directionalLight intensity={0.5} position={[0, 0, -5]} />
          <EarbudsModel />
        </Suspense>
      </Canvas>
    </div>
  );
};
