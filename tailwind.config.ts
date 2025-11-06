// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs de l'établissement
        'coffee-dark': '#AE8156',
        'coffee-cream': '#FEEFDE',
        'coffee-light': '#F6E2CC',
        'coffee-medium': '#D6B598',
        
        border: "hsl(30, 30%, 85%)",
        input: "hsl(30, 30%, 85%)",
        ring: "hsl(28, 45%, 52%)",
        background: "hsl(33, 100%, 94%)",
        foreground: "hsl(28, 45%, 30%)",
        primary: {
          DEFAULT: "#AE8156",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F6E2CC",
          foreground: "#AE8156",
        },
        muted: {
          DEFAULT: "#FEEFDE",
          foreground: "#AE8156",
        },
        accent: {
          DEFAULT: "#D6B598",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config;