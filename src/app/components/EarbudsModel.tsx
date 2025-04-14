"use client";

import { FC, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useMaterialColorAndTexture } from "./useMaterialColorAndTexture";
import { easeOutExpo } from "../utils/easeOutExpo";
import { useModelStore } from "../stores/useModelStore";

type Props = {
  targetRotation: THREE.Vector2;
};

/**
 * EarbudsModel
 */
export const EarbudsModel: FC<Props> = ({ targetRotation }) => {
  const ref = useRef<THREE.Group>(null);
  const rotateY = useModelStore((state) => state.rotateY);
  const rotateX = useModelStore((state) => state.rotateX);
  const modelLoaded = useModelStore((state) => state.modelLoaded);
  const setModelLoaded = useModelStore((state) => state.setModelLoaded);
  const modelAppearCompleted = useModelStore(
    (state) => state.modelAppearCompleted
  );
  const setModelAppearCompleted = useModelStore(
    (state) => state.setModelAppearCompleted
  );

  const { scene } = useLoader(GLTFLoader, "/models/earbuds.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
    loader.manager.onLoad = () => setModelLoaded(true);
  });

  useFrame(() => {
    const easeSpeed = easeOutExpo(0.02);

    if (ref.current && modelLoaded && !modelAppearCompleted) {
      ref.current.position.y = ref.current.position.y + 0.01;
      console.log("ref.current.position.y", ref.current.position.y);

      if (ref.current.position.y >= -0.319) {
        setModelAppearCompleted(true);
        ref.current.position.y = -0.32;
      }
    }

    // Animation by mousemove and button controls
    if (ref.current) {
      ref.current.rotation.y +=
        (targetRotation.x - ref.current.rotation.y) * easeSpeed;
      ref.current.rotation.x +=
        (targetRotation.y - ref.current.rotation.x) * easeSpeed;

      ref.current.rotation.y += rotateY * Math.PI * 0.25 * easeSpeed;
      ref.current.rotation.x += rotateX * Math.PI * 0.25 * easeSpeed;
    }
  });

  // chnage material color and texture
  useMaterialColorAndTexture(scene);

  return (
    <primitive
      object={scene}
      scale={0.1}
      position={[0, -0.32, 0]}
      ref={ref}
      opacity={0}
    />
  );
};
