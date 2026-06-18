export type PaletteSlug =
  | "terracotta"
  | "sage"
  | "clay"
  | "ochre"
  | "slate"
  | "plum";

export interface PaletteColors {
  bg: string;
  surface: string;
  border: string;
  accent: string;
  text: string;
  textMuted: string;
}

export interface Palette {
  slug: PaletteSlug;
  name: string;
  light: PaletteColors;
  dark: PaletteColors;
  /** Preview colors rendered as the picker's swatch grid, in [bg, surface, accent, text] order. */
  swatches: string[];
}

export const palettes: Palette[] = [
  {
    slug: "terracotta",
    name: "Terracotta",
    light: {
      bg: "#f5f0eb",
      surface: "#ece7e0",
      border: "#d8cfc5",
      accent: "#b07d5a",
      text: "#2c2824",
      textMuted: "#5a4e42",
    },
    dark: {
      bg: "#1e1c19",
      surface: "#2a2723",
      border: "#3a3630",
      accent: "#c4956a",
      text: "#e8e0d5",
      textMuted: "#b8a898",
    },
    swatches: ["#f5f0eb", "#ece7e0", "#b07d5a", "#2c2824"],
  },
  {
    slug: "sage",
    name: "Sage",
    light: {
      bg: "#f1f0e8",
      surface: "#e6e4d8",
      border: "#d2cfbe",
      accent: "#7a8c6b",
      text: "#272a22",
      textMuted: "#565f4a",
    },
    dark: {
      bg: "#1b1d17",
      surface: "#262920",
      border: "#363a2d",
      accent: "#93a982",
      text: "#e6e8dc",
      textMuted: "#aab298",
    },
    swatches: ["#f1f0e8", "#e6e4d8", "#7a8c6b", "#272a22"],
  },
  {
    slug: "clay",
    name: "Clay",
    light: {
      bg: "#f6ece6",
      surface: "#ecdcd1",
      border: "#dcc2b0",
      accent: "#a8512f",
      text: "#2e1f18",
      textMuted: "#6b4a3a",
    },
    dark: {
      bg: "#211712",
      surface: "#2d211a",
      border: "#403025",
      accent: "#d97a52",
      text: "#f0ddd2",
      textMuted: "#c2a08c",
    },
    swatches: ["#f6ece6", "#ecdcd1", "#a8512f", "#2e1f18"],
  },
  {
    slug: "ochre",
    name: "Ochre",
    light: {
      bg: "#f7f1e3",
      surface: "#ece3c8",
      border: "#d9c89e",
      accent: "#b8862e",
      text: "#2b2415",
      textMuted: "#6b5a35",
    },
    dark: {
      bg: "#201b10",
      surface: "#2c2517",
      border: "#443a21",
      accent: "#d9a647",
      text: "#f1e7cf",
      textMuted: "#c4b48a",
    },
    swatches: ["#f7f1e3", "#ece3c8", "#b8862e", "#2b2415"],
  },
  {
    slug: "slate",
    name: "Slate",
    light: {
      bg: "#eef0f0",
      surface: "#e1e5e5",
      border: "#c9d0d0",
      accent: "#4f7d80",
      text: "#1f2728",
      textMuted: "#4c5c5d",
    },
    dark: {
      bg: "#161b1b",
      surface: "#202828",
      border: "#313d3d",
      accent: "#6fa3a6",
      text: "#dde6e6",
      textMuted: "#a3b6b6",
    },
    swatches: ["#eef0f0", "#e1e5e5", "#4f7d80", "#1f2728"],
  },
  {
    slug: "plum",
    name: "Plum",
    light: {
      bg: "#f3eceb",
      surface: "#e8dcda",
      border: "#d4c0bd",
      accent: "#8f4a5a",
      text: "#2a1c1f",
      textMuted: "#5e3f44",
    },
    dark: {
      bg: "#1d1517",
      surface: "#281d20",
      border: "#3a2a2d",
      accent: "#b97185",
      text: "#ece1e0",
      textMuted: "#b89a9c",
    },
    swatches: ["#f3eceb", "#e8dcda", "#8f4a5a", "#2a1c1f"],
  },
];

export const defaultPalette: PaletteSlug = "terracotta";
