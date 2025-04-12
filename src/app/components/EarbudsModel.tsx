"use client";

import { FC, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useModelStore } from "../stores/useModelStore";

/**
 * EarbudsModel
 */
export const EarbudsModel: FC = () => {
  const color = useModelStore((state) => state.color);

  const { scene } = useLoader(
    GLTFLoader,
    "/models/earbuds_draco.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco-gltf/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  useEffect(() => {
    if (!scene) {
      return;
    }
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: color,
          roughness: 0.5,
          metalness: 0.5,
        });
      }
    });
  }, [scene, color]);

  return <primitive object={scene} scale={1} position={[0, -1.5, -4]} />;
};
