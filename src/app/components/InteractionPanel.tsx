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
export const InteractionPanel: FC = () => {
  const setColor = useModelStore((state) => state.setColor);
  const setTextureKey = useModelStore((state) => state.setTextureKey);

  return (
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
  );
};
