/**
 * Texture options.
 */
export const TEXTURE_OPTIONS = [
  { name: "None", key: "none" },
  { name: "Denim", key: "fabcir" },
  { name: "Wood", key: "wood" },
] as const;

/** Type of key of texture options */
export type TextureKey = (typeof TEXTURE_OPTIONS)[number]["key"];
