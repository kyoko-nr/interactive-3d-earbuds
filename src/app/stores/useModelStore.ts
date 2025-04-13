import { create } from "zustand";
import { COLOR_OPTIONS } from "../constants/colors";
import { TextureKey } from "../constants/textures";

interface ModelState {
  /** Model color */
  color: string;
  /** Set model color */
  setColor: (color: string) => void;
  /** Model texture */
  textureKey: TextureKey;
  /** Set model texture */
  setTextureKey: (textureKey: TextureKey) => void;
  /** Model rotation */
  rotateY: number;
  /** Set model rotation */
  setRotateY: (rotateY: number) => void;
  /** Model rotation */
  rotateX: number;
  /** Set model rotation */
  setRotateX: (state: number) => void;
}

/**
 * Model store
 */
export const useModelStore = create<ModelState>()((set) => ({
  color: COLOR_OPTIONS[0].value,
  setColor: (color: string) => set({ color }),
  textureKey: "none",
  setTextureKey: (textureKey: TextureKey) => set({ textureKey }),
  rotateY: 0,
  setRotateY: (rotateY: number) => set({ rotateY }),
  rotateX: 0,
  setRotateX: (rotateX: number) => set({ rotateX }),
}));
