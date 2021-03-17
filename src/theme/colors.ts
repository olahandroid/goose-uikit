import { Colors } from "./types";

export const baseColors = {
  failure: "#FC6400",
  primary: "#FC6400",
  primaryBright: "#FC6400",
  primaryDark: "#FC6400",
  secondary: "#FC6400",
  success: "#FC6400",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#FC6400",
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
  text: "#FC6400",
  textDisabled: "#FC6400",
  textSubtle: "#FC6400",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
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
