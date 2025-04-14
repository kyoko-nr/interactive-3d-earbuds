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
  const ref = useRef<THREE.Object3D>(null);
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

  const appearProgress = useRef(0);

  const { scene } = useLoader(GLTFLoader, "/models/earbuds.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
    loader.manager.onLoad = () => setModelLoaded(true);
  });

  const appearSpeed = 0.02;
  const appearStart = -0.4;
  const appearEnd = -0.32;
  const appearRange = appearEnd - appearStart;
  const animSpeed = 0.09;
  useFrame(() => {
    // Appear animation
    if (ref.current && modelLoaded && !modelAppearCompleted) {
      appearProgress.current += appearSpeed;
      const eased = easeOutExpo(Math.min(appearProgress.current, 1));

      // Positioning animation
      ref.current.position.y = appearStart + appearRange * eased;
      // Opacity animation
      ref.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.transparent = true;
          child.material.opacity = eased;
        }
      });

      if (appearProgress.current >= 1) {
        setModelAppearCompleted(true);
        ref.current.position.y = -0.32;
      }
    }

    // Animation by mousemove and button controls
    if (ref.current) {
      ref.current.rotation.y +=
        (targetRotation.x - ref.current.rotation.y) * animSpeed;
      ref.current.rotation.x +=
        (targetRotation.y - ref.current.rotation.x) * animSpeed;

      ref.current.rotation.y += rotateY * Math.PI * 0.25 * animSpeed;
      ref.current.rotation.x += rotateX * Math.PI * 0.25 * animSpeed;
    }
  });

  // chnage material color and texture
  useMaterialColorAndTexture(scene);

  return (
    <primitive
      object={scene}
      scale={0.1}
      position={[0, appearStart, 0]}
      ref={ref}
    />
  );
};
