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

const commonBoxShadow = "2px 2px 2px 0px rgba(0,0,0,0.25)";

const commonBorder = "solid 1px rgba(0,0,0,0.5)";

const thickBorder = "solid 2px rgba(0,0,0,0.5)";

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
    fontFamily: "Anonymous Pro",
    fontSize: "36px",
    fontWeight: "bold",
  },
};

export const ThemeContext = React.createContext(theme);
