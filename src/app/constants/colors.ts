export const COLOR_OPTIONS = [
  { name: "white", color: "#ffffff" },
  { name: "black", color: "#000000" },
  { name: "blue", color: "#2563EB" },
  { name: "green", color: "#22C55E" },
  { name: "purple", color: "#8B5CF6" },
] as const;

export type ColorOption = (typeof COLOR_OPTIONS)[number];
