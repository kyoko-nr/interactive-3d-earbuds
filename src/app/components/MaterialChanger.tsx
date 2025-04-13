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

/**
 * Change color UI for earbuds
 */
export const MaterialChanger: FC = () => {
  const setColor = useModelStore((state) => state.setColor);
  const setTextureKey = useModelStore((state) => state.setTextureKey);

  return (
    <div className="absolute top-50% right-8 -translate-y-50% p-6 rounded-sm grid gap-8 bg-white/50 shadow-md">
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
  );
};
