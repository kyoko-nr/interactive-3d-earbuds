"use client";

import { useProgress } from "@react-three/drei";
import { FC } from "react";

/**
 * Loader
 */
export const Loader: FC = () => {
  const { progress } = useProgress();
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
      <p className="text-lg">{progress}% loaded</p>
    </div>
  );
};
