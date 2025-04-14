"use client";

import { FC } from "react";
import { gabarito } from "../styles/fonts";
import { motion } from "framer-motion";
import { easeOutExpo } from "../constants/easing";

/**
 * Title component
 */
export const Title: FC = () => (
  <div className="flex flex-col items-center justify-center gap-[24px] p-16 max-md:p-8">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.0,
        ease: easeOutExpo,
      }}
    >
      <h1
        className={`${gabarito.variable} text-6xl font-medium tracking-tight max-md:text-3xl`}
      >
        Interactive 3D Earbuds
      </h1>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.0,
        ease: easeOutExpo,
        delay: 0.1,
      }}
    >
      <p className="text-lg max-md:text-base">
        A clean and simple design showcasing a 3D earbuds with changable texture
        and color.
      </p>
    </motion.div>
  </div>
);
