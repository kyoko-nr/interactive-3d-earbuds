import { useMemo } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useModelStore } from "../stores/useModelStore";

const textureModelName = ["lid_outer", "case_outer"];
const coloredModelName = [
  "pods_inner_2",
  "pods_inner_1",
  "pods_grille",
  "pods_main",
];

/**
 * Use scene textures
 * @param scene scene to change
 */
export const useMaterialColorAndTexture = (scene: THREE.Object3D) => {
  const color = useModelStore((state) => state.color);
  const texture = useModelStore((state) => state.textureKey);

  // Load textures
  const textures = useLoader(THREE.TextureLoader, [
    "/textures/Fabric077.jpg",
    "/textures/Fabric077_Normal.jpg",
    "/textures/Wood052.jpg",
    "/textures/Wood052_Normal.jpg",
  ]);
  textures.forEach((t) => (t.wrapS = t.wrapT = THREE.RepeatWrapping));

  const textureMap = useMemo(
    () => ({
      fabric: {
        texture: textures[0],
        normal: textures[1],
      },
      wood: {
        texture: textures[2],
        normal: textures[3],
      },
    }),
    [textures],
  );

  // Materials
  const whiteMaterial = createStandardMaterial(0.5, 0.4, "#ffffff");
  const coloredMaterial = createStandardMaterial(0.5, 0.3, color);
  const textureMaterial = createStandardMaterial(0.8, 0);
  if (texture !== "none") {
    textureMaterial.map = textureMap[texture].texture;
    textureMaterial.normalMap = textureMap[texture].normal;
  }

  // If texture is none, change all changable materials as set color.
  const toChangeTexture = texture === "none" ? [] : textureModelName;
  const toChangeColor =
    texture === "none"
      ? [...coloredModelName, ...textureModelName]
      : coloredModelName;

  // Change materials
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (toChangeColor.includes(child.name)) {
        child.material = coloredMaterial;
      } else if (toChangeTexture.includes(child.name)) {
        child.material = textureMaterial;
      } else {
        child.material = whiteMaterial;
      }
    }
  });
};

const createStandardMaterial = (
  roughness: number,
  metalness: number,
  color?: string,
) => {
  const material = new THREE.MeshStandardMaterial({
    roughness,
    metalness,
    side: THREE.DoubleSide,
  });
  if (color) {
    material.color.set(color);
  }
  return material;
};
