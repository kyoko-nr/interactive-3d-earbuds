"use client";

import { FC } from "react";
import { COLOR_OPTIONS, ColorName, ColorValue } from "../constants/colors";
import { useModelStore } from "../stores/useModelStore";
import {
  TEXTURE_OPTIONS,
  TextureKey,
  TextureName,
} from "../constants/textures";
import { ButtonGroup } from "./ButtonGroup";
import { motion } from "framer-motion";
import { easeOutExpo } from "../constants/easing";

/**
 * Change color UI for earbuds
 */
export const InteractionPanel: FC = () => {
  const setColor = useModelStore((state) => state.setColor);
  const setTextureKey = useModelStore((state) => state.setTextureKey);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: easeOutExpo, delay: 0.2 }}
    >
      <div className="p-4 rounded-sm gtid gap-4 bg-white/50 shadow-md pointer-events-none border-gray-200">
        <ButtonGroup<ColorValue, ColorName>
          title="Color"
          options={COLOR_OPTIONS}
          onClick={setColor}
        />
        <ButtonGroup<TextureKey, TextureName>
          title="Texture"
          options={TEXTURE_OPTIONS}
          onClick={setTextureKey}
        />
      </div>
    </motion.div>
  );
};
