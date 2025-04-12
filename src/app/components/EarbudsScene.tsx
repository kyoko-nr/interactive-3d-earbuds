"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader } from "@react-three/fiber";

/**
 * EarbudsModel
 * （中でローディングする専用コンポーネントを作る）
 */
const EarbudsModel: FC = () => {
  const { scene } = useLoader(
    GLTFLoader,
    "/models/earbuds_draco.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco-gltf/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return <primitive object={scene} scale={1} />;
};

/**
 * EarbudsScene
 */
export const EarbudsScene: FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} position={[10, 10, 10]} />
          <EarbudsModel />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};
