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
  accentLight: string;
  accentDark: string;
  text: string;
  textMuted: string;
  textSubtle: string;
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
      accentLight: "#d4a882",
      accentDark: "#8a5a38",
      text: "#2c2824",
      textMuted: "#5a4e42",
      textSubtle: "#8a7060",
    },
    dark: {
      bg: "#1e1c19",
      surface: "#2a2723",
      border: "#3a3630",
      accent: "#c4956a",
      accentLight: "#ddb791",
      accentDark: "#9c6b46",
      text: "#e8e0d5",
      textMuted: "#b8a898",
      textSubtle: "#8a7a6a",
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
      accentLight: "#a3b393",
      accentDark: "#57664a",
      text: "#272a22",
      textMuted: "#565f4a",
      textSubtle: "#8a8a72",
    },
    dark: {
      bg: "#1b1d17",
      surface: "#262920",
      border: "#363a2d",
      accent: "#93a982",
      accentLight: "#b7c7a8",
      accentDark: "#6f8260",
      text: "#e6e8dc",
      textMuted: "#aab298",
      textSubtle: "#7a8268",
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
      accentLight: "#c97e5c",
      accentDark: "#7a3920",
      text: "#2e1f18",
      textMuted: "#6b4a3a",
      textSubtle: "#a37e63",
    },
    dark: {
      bg: "#211712",
      surface: "#2d211a",
      border: "#403025",
      accent: "#d97a52",
      accentLight: "#e6a182",
      accentDark: "#ab5836",
      text: "#f0ddd2",
      textMuted: "#c2a08c",
      textSubtle: "#8f6c54",
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
      accentLight: "#d2ab5e",
      accentDark: "#8a631e",
      text: "#2b2415",
      textMuted: "#6b5a35",
      textSubtle: "#a3905f",
    },
    dark: {
      bg: "#201b10",
      surface: "#2c2517",
      border: "#443a21",
      accent: "#d9a647",
      accentLight: "#e6c179",
      accentDark: "#ab7e32",
      text: "#f1e7cf",
      textMuted: "#c4b48a",
      textSubtle: "#948257",
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
      accentLight: "#7ba3a6",
      accentDark: "#375a5c",
      text: "#1f2728",
      textMuted: "#4c5c5d",
      textSubtle: "#7e8f8f",
    },
    dark: {
      bg: "#161b1b",
      surface: "#202828",
      border: "#313d3d",
      accent: "#6fa3a6",
      accentLight: "#97c0c2",
      accentDark: "#517c7e",
      text: "#dde6e6",
      textMuted: "#a3b6b6",
      textSubtle: "#71807f",
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
      accentLight: "#b67885",
      accentDark: "#663340",
      text: "#2a1c1f",
      textMuted: "#5e3f44",
      textSubtle: "#93716d",
    },
    dark: {
      bg: "#1d1517",
      surface: "#281d20",
      border: "#3a2a2d",
      accent: "#b97185",
      accentLight: "#d29aa8",
      accentDark: "#8c5061",
      text: "#ece1e0",
      textMuted: "#b89a9c",
      textSubtle: "#886a6c",
    },
    swatches: ["#f3eceb", "#e8dcda", "#8f4a5a", "#2a1c1f"],
  },
];

export const defaultPalette: PaletteSlug = "terracotta";
