"use client";

import { Canvas } from "@react-three/fiber";
import { FC, Suspense, useState } from "react";
import { EarbudsModel } from "./EarbudsModel";
import { Vector2 } from "three";
import { Loader } from "./Loader";

/**
 * EarbudsScene
 */
export const EarbudsScene: FC = () => {
  const [targetRotation, setTargetRotation] = useState(new Vector2(0, 0));
  const [isLoading, setIsLoading] = useState(true);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;

    setTargetRotation(new Vector2(x * 0.3, y * 0.3));
  };

  return (
    <div
      className="h-full w-full"
      onMouseMove={handleMouseMove}
    >
      {isLoading && <Loader />}
      <Canvas
        camera={{
          position: [0, 0, 10],
          zoom: 10,
        }}
        onCreated={() => setIsLoading(false)}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <directionalLight
            intensity={1.2}
            position={[10, 10, 10]}
          />
          <directionalLight
            intensity={0.5}
            position={[0, 0, -5]}
          />
          <EarbudsModel targetRotation={targetRotation} />
        </Suspense>
      </Canvas>
    </div>
  );
};
