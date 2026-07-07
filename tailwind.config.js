/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#1D4ED8"
        },

        secondary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#6D28D9"
        },

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        background: "#0F172A",
        surface: "#111827",
        border: "#1F2937",

        text: {
          primary: "#F8FAFC",
          secondary: "#CBD5E1",
          muted: "#94A3B8"
        }
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif"
        ],
        arabic: [
          "Cairo",
          "sans-serif"
        ]
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },

      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.25)",
        card: "0 10px 40px rgba(0,0,0,0.35)"
      },

      backgroundImage: {
        hero:
          "linear-gradient(135deg,#0f172a 0%,#111827 50%,#1e293b 100%)",

        primary:
          "linear-gradient(135deg,#3B82F6,#8B5CF6)",

        glow:
          "radial-gradient(circle at center,rgba(59,130,246,.35),transparent 70%)"
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        fade: "fade 0.6s ease",
        glow: "glow 2s ease-in-out infinite alternate",
        spinSlow: "spin 8s linear infinite"
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-12px)"
          }
        },

        fade: {
          from: {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        },

        glow: {
          from: {
            boxShadow: "0 0 10px rgba(59,130,246,.25)"
          },
          to: {
            boxShadow: "0 0 30px rgba(59,130,246,.6)"
          }
        }
      }
    }
  },

  plugins: []
};
