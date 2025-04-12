"use client";

import { FC } from "react";
import { COLOR_OPTIONS } from "../constants/colors";
import { useModelStore } from "../stores/useModelStore";

/**
 * Change color UI for earbuds
 */
export const ColorChanger: FC = () => {
  const setColor = useModelStore((state) => state.setColor);

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
    </div>
  );
};
