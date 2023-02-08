import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#1F2A40",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509",
      },
      indigo: {
        100: "#121b2e",
        200: "#25375b",
        300: "#375289",
        400: "#4a6eb6",
        500: "#5c89e4",
        600: "#7da1e9",
        700: "#9db8ef",
        800: "#bed0f4",
        900: "#dee7fa",
      },
      textColor: {
        100: "#232325",
        200: "#46464a",
        300: "#68696f",
        400: "#8b8c94",
        500: "#aeafb9",
        600: "#bebfc7",
        700: "#cecfd5",
        800: "#dfdfe3",
        900: "#efeff1",
      },
    }
    : {
      primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f5", // manually changed
        500: "#141b2d",
        600: "#1F2A40",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
      indigo: {
        100: "#dee7fa",
        200: "#bed0f4",
        300: "#9db8ef",
        400: "#7da1e9",
        500: "#5c89e4",
        600: "#4a6eb6",
        700: "#375289",
        800: "#25375b",
        900: "#121b2e"
      },
      textColor: {
        100: "#efeff1",
        200: "#dfdfe3",
        300: "#cecfd5",
        400: "#bebfc7",
        500: "#aeafb9",
        600: "#8b8c94",
        700: "#68696f",
        800: "#46464a",
        900: "#232325"
      },
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            main: colors.primary[200],
          },
          secondary: {
            main: colors.indigo[500],
          },
          neutral: {
            dark: colors.textColor[700],
            main: colors.textColor[500],
            light: colors.textColor[100],
          },
          background: {
            default: colors.primary[500],
          },

        }
        : {
          // palette values for light mode
          primary: {
            main: colors.primary[600],
          },
          secondary: {
            main: colors.indigo[500],
          },
          neutral: {
            dark: colors.textColor[700],
            main: colors.textColor[500],
            light: colors.textColor[100],
          },
          background: {
            default: "#fcfcfc",
          },
        }),
    },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 35,
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 29,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 20,
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 18,
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 15,
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 12,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
