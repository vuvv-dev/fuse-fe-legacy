import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "60px",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      title: ["Calistoga", "serif"],
    },
    extend: {
      transitionDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
      },
      boxShadow: {
        "3d": "2px 2px 0px 0px #000",
        "3d-light": "1px 1px 0px 0px #000",
        "3d-dark": "4px 4px 0px 0px #000",
        "3d-hover": "4px 4px 0px 0px #000",
        "3d-active": "0px 0px 0px 0px #000",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        background: {
          DEFAULT: "#F5F3EA",
        },
        status : {
          offline : "#DCDAD3",
          online : "#65CCA0"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          form: {transform: "translateX(0)"},
          to: {transform: "translateX(-50%)"},
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll" : "infinite-scroll 20s linear infinite",
      },
      
    },
  },
  plugins: [require('tailwindcss-animated')],
} satisfies Config;

export default config;
