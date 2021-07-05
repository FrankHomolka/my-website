import React from "react";

export interface ITheme {
  headerStyle: React.CSSProperties;
  colors: {
    accent: string;
    background: string;
    foreground: string;
    primary: string;
    decline: string;
    secondary: string;
    highlight: string;
  };
}

const commonColors = {
  accent: "#ff0000",
  background: "#eeeeee",
  foreground: "#000000",
  primary: "#5d7557",
  decline: "red",
  secondary: "#EE5465",
  highlight: "#fff099",
};

export const theme: ITheme = {
  colors: {
    accent: commonColors.accent,
    background: commonColors.background,
    foreground: commonColors.foreground,
    primary: commonColors.primary,
    decline: commonColors.decline,
    secondary: commonColors.secondary,
    highlight: commonColors.highlight,
  },
  headerStyle: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontSize: "36px",
    fontWeight: "bold",
    color: "black",
    padding: "40px 0",
  },
};

export const ThemeContext = React.createContext(theme);
