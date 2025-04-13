/**
 * Color options.
 */
export const COLOR_OPTIONS = [
  { name: "white", value: "#ffffff" },
  { name: "gray", value: "#a6a6a6" },
  { name: "blue", value: "#8FB6D9" },
  { name: "green", value: "#A4BFA8" },
  { name: "purple", value: "#B270A0" },
  { name: "peach", value: "#E87A7A" },
] as const;

export type ColorName = (typeof COLOR_OPTIONS)[number]["name"];

export type ColorValue = (typeof COLOR_OPTIONS)[number]["value"];
