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
import { RotationButtons } from "./RotationButtons";

/**
 * Change color UI for earbuds
 */
export const InteractionPanel: FC = () => {
  const setColor = useModelStore((state) => state.setColor);
  const setTextureKey = useModelStore((state) => state.setTextureKey);

  return (
    <div className="absolute top-[50%] right-12 -translate-y-[50%] p-6 rounded-sm flex gap-4 bg-white/50 shadow-md pointer-events-none">
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
      <RotationButtons />
    </div>
  );
};
