"use client";

import { FC } from "react";
import { useModelStore } from "../stores/useModelStore";
import { motion } from "framer-motion";
import { easeOutExpo } from "../constants/easing";

/**
 * Model rotation buttons
 */
export const RotationButtons: FC = () => {
  const rotateX = useModelStore((state) => state.rotateX);
  const rotateY = useModelStore((state) => state.rotateY);
  const setRotateX = useModelStore((state) => state.setRotateX);
  const setRotateY = useModelStore((state) => state.setRotateY);

  const buttons = [
    {
      label: "Rotate up",
      bg: "bg-[url('/icons/icon_left.svg')] rotate-45",
      onClick: () => setRotateX(rotateX - 1),
      position: "top-0 left-0", // 左
    },
    {
      label: "Rotate right",
      bg: "bg-[url('/icons/icon_right.svg')] -rotate-45",
      onClick: () => setRotateY(rotateY + 1),
      position: "top-0 right-0", // 右
    },
    {
      label: "Rotate down",
      bg: "bg-[url('/icons/icon_right.svg')] rotate-45",
      onClick: () => setRotateX(rotateX + 1),
      position: "bottom-0 right-0", // 下
    },
    {
      label: "Rotate left",
      bg: "bg-[url('/icons/icon_left.svg')] -rotate-45",
      onClick: () => setRotateY(rotateY - 1),
      position: "bottom-0 left-0", // 上
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: easeOutExpo, delay: 0.2 }}
    >
      <div className="relative w-30 h-30 border border-gray-200 mx-auto mt-8 bg-white rounded-full overflow-hidden rotate-45 shadow-md">
        <div>
          {buttons.map((button) => (
            <button
              key={button.label}
              className={`pointer-events-auto cursor-pointer absolute ${button.position} size-15 flex items-center justify-center transition-colors duration-200 hover:bg-gray-100`}
              onClick={button.onClick}
              aria-label={button.label}
            >
              <span
                className={`absolute inset-0 bg-no-repeat bg-size-[auto_40px] bg-center ${button.bg} transition-transform hover:scale-110`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
