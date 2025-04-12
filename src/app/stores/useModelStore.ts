import { create } from "zustand";

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
  color: "#ff0000",
  setColor: (color: string) => set({ color }),
}));
