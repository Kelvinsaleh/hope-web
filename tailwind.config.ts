import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hope brand palette — named tokens, not Tailwind defaults
        bloom: {
          50: "#F6F4FE",
          100: "#EEEAFD",
          200: "#DBD2FB",
          300: "#BFAEF6",
          400: "#9D82EE",
          500: "#7C5CE0", // primary accent
          600: "#6645C7",
          700: "#5236A1",
          800: "#412C7E",
          900: "#352566",
        },
        ink: {
          50: "#F7F7F8",
          100: "#EDEDF0",
          400: "#6E6B7A",
          600: "#4A4757",
          800: "#2B2836",
          900: "#1B1924", // near-black text / dark bg
        },
        leaf: "#3FA37A", // calm affirmative green, used sparingly
        amber: "#E0A23F", // crisis/caution accent, used sparingly
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(81, 54, 161, 0.12)",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.ink.800"),
            "--tw-prose-headings": theme("colors.ink.900"),
            "--tw-prose-links": theme("colors.bloom.600"),
            "--tw-prose-bold": theme("colors.ink.900"),
            "--tw-prose-quotes": theme("colors.bloom.700"),
            "--tw-prose-invert-body": theme("colors.ink.100"),
            "--tw-prose-invert-headings": "#FFFFFF",
            "--tw-prose-invert-links": theme("colors.bloom.300"),
            maxWidth: "70ch",
            a: { fontWeight: "500", textDecoration: "none", borderBottom: "1px solid" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
