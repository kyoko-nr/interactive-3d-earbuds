"use client";

import { FC } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader } from "@react-three/fiber";
import { useMaterialColorAndTexture } from "./useMaterialColorAndTexture";

/**
 * EarbudsModel
 */
export const EarbudsModel: FC = () => {
  const { scene } = useLoader(GLTFLoader, "/models/earbuds.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  // chnage material color and texture
  useMaterialColorAndTexture(scene);

  return <primitive object={scene} scale={0.1} position={[-0.4, -0.32, 0]} />;
};
