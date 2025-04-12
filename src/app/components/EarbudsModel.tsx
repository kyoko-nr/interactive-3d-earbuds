"use client";

import { FC, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useModelStore } from "../stores/useModelStore";

const textureModelName = ["lid_outer", "case_outer"];
const coloredModelName = [
  "pods_inner_2",
  "pods_inner_1",
  "pods_grille",
  "pods_main",
];

/**
 * EarbudsModel
 */
export const EarbudsModel: FC = () => {
  const color = useModelStore((state) => state.color);

  const { scene } = useLoader(GLTFLoader, "/models/earbuds.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  const whiteMaterial = new THREE.MeshStandardMaterial({
    roughness: 0.5,
    metalness: 0.5,
    side: THREE.DoubleSide,
  });
  whiteMaterial.color.set("#ffffff");

  useEffect(() => {
    if (!scene) {
      return;
    }
    const coloredMaterial = whiteMaterial.clone();
    coloredMaterial.color.set(color);
    const textureMaterial = whiteMaterial.clone();
    textureMaterial.color.set(color);
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (textureModelName.includes(child.name)) {
          child.material = coloredMaterial;
        } else if (coloredModelName.includes(child.name)) {
          child.material = coloredMaterial;
        } else {
          child.material = whiteMaterial;
        }
        console.log("child", child.name);
      }
    });
  }, [scene, color]);

  return <primitive object={scene} scale={0.5} position={[0, -0.7, -4]} />;
};
