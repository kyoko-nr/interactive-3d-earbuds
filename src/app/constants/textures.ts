/**
 * Texture options.
 */
export const TEXTURE_OPTIONS = [
  { name: "None", value: "none" },
  { name: "Denim", value: "fabric" },
  { name: "Wood", value: "wood" },
] as const;

/** Type of value of texture options */
export type TextureKey = (typeof TEXTURE_OPTIONS)[number]["value"];

/** Type of name of texture options */
export type TextureName = (typeof TEXTURE_OPTIONS)[number]["name"];
