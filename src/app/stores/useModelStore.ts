import { create } from "zustand";
import { COLOR_OPTIONS } from "../constants/colors";

interface ModelState {
  /** Model color */
  color: string;
  /** Set model color */
  setColor: (color: string) => void;
}

/**
 * Model store
 */
export const useModelStore = create<ModelState>()((set) => ({
  color: COLOR_OPTIONS[0].color,
  setColor: (color: string) => set({ color }),
}));
