import { Colors } from "./types";

export const baseColors = {
  failure: "#8a6a10",
  primary: "#8a6a10",
  primaryBright: "#8a6a10",
  primaryDark: "#8a6a10",
  secondary: "#8a6a10",
  success: "#8a6a10",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#8a6a10",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#FC6400",
  tertiary: "#FC6400",
  text: "#8a6a10",
  textDisabled: "#8a6a10",
  textSubtle: "#8a6a10",
  borderColor: "#8a6a10",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #8a6a10 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FC6400",
  textDisabled: "#FC6400",
  textSubtle: "#FC6400",
  borderColor: "#FC6400",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
