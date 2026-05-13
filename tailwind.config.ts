import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'elastic-out': 'cubic-bezier(0.22, 1, 0.36, 1)', // Snappy expansion curve
      },
      colors: {
        "on-primary-container": "#c19f8e",
        "on-tertiary-container": "#9fa994",
        "tertiary-container": "#353e2e",
        "tertiary-fixed-dim": "#c0cab4",
        "on-error-container": "#93000a",
        "primary-container": "rgb(var(--color-primary-container) / <alpha-value>)",
        "surface-container-lowest": "#ffffff",
        "on-background": "#1a1c1a",
        "on-primary-fixed-variant": "#5a4134",
        "surface-container-high": "#e9e8e5",
        "on-secondary-container": "#6a635c",
        "on-surface-variant": "#4f453f",
        "on-tertiary-fixed-variant": "#404a39",
        "surface-tint": "#74584a",
        "surface-dim": "#dbdad7",
        "inverse-surface": "#2f312f",
        "surface-container": "#efeeeb",
        "primary": "rgb(var(--color-primary) / <alpha-value>)",
        "tertiary": "#202819",
        "on-primary": "#ffffff",
        "secondary": "rgb(var(--color-secondary) / <alpha-value>)",
        "tertiary-fixed": "#dce6cf",
        "primary-fixed": "#ffdbca",
        "on-secondary": "#ffffff",
        "on-tertiary-fixed": "#161e10",
        "secondary-fixed-dim": "#cec5bc",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "#e3e2e0",
        "on-error": "#ffffff",
        "on-secondary-fixed": "#1f1b16",
        "on-surface": "#1a1c1a",
        "surface-variant": "#e3e2e0",
        "surface": "#faf9f6",
        "error-container": "#ffdad6",
        "primary-fixed-dim": "#e3bfad",
        "on-secondary-fixed-variant": "#4c463f",
        "surface-bright": "#faf9f6",
        "on-primary-fixed": "#2a170c",
        "error": "#ba1a1a",
        "secondary-container": "#ebe1d8",
        "inverse-primary": "#e3bfad",
        "secondary-fixed": "#ebe1d8",
        "outline": "#81746e",
        "background": "#faf9f6",
        "inverse-on-surface": "#f2f1ee",
        "outline-variant": "#d3c3bc",
        "surface-container-low": "#f4f3f1"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1280px",
        "margin-edge": "64px",
        "gutter": "32px",
        "section-gap": "120px",
        "unit": "8px"
      },
      fontFamily: {
        "headline-md": ["var(--font-manrope)", "sans-serif"],
        "headline-xl": ["var(--font-manrope)", "sans-serif"],
        "label-caps": ["var(--font-manrope)", "sans-serif"],
        "headline-lg": ["var(--font-manrope)", "sans-serif"],
        "body-lg": ["var(--font-manrope)", "sans-serif"],
        "body-md": ["var(--font-manrope)", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "700" }],
        "headline-xl": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;