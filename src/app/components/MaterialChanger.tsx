"use client";

import { FC } from "react";
import { COLOR_OPTIONS } from "../constants/colors";
import { useModelStore } from "../stores/useModelStore";
import { TEXTURE_OPTIONS } from "../constants/textures";

/**
 * Change color UI for earbuds
 */
export const MaterialChanger: FC = () => {
  const setColor = useModelStore((state) => state.setColor);
  const setTextureKey = useModelStore((state) => state.setTextureKey);

  return (
    <div className="absolute top-10 left-10 p-4 border border-gray-500 rounded-sm">
      <p>Change color</p>
      <ul className="grid gap-2">
        {COLOR_OPTIONS.map((color) => (
          <li key={color.name}>
            <button
              className="cursor-pointer w-full p-1 border border-gray-500 rounded-sm"
              style={{
                backgroundColor: color.color,
                color: color.color === "#ffffff" ? "#000000" : "#ffffff",
              }}
              onClick={() => setColor(color.color)}
            >
              {color.name}
            </button>
          </li>
        ))}
      </ul>
      <p>Change texture</p>
      <ul className="grid gap-2">
        {TEXTURE_OPTIONS.map((texture) => (
          <li key={texture.name}>
            <button
              className="cursor-pointer w-full p-1 border border-gray-500 rounded-sm"
              onClick={() => setTextureKey(texture.key)}
            >
              {texture.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
