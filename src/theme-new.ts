import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/700.css";

export const fonts = {
  inter: "Inter"
};

export const theme = extendTheme({
  colors: {
    white: "#ffffff",
    black: "#141414",
    violet: "#B07BF3",
    yellow: "#F2EE8A",
    "darker-teal": "#39D2B4",
    "light-teal": "#91F9E5",
    "lighter-teal": "#91F9E5D9",
  },
  fonts: {
    heading: fonts.inter,
    body: fonts.inter,
  },
  textStyles: {
      h1: {
        fontSize: ["68px", "108px"],
        fontWeight: "700",
        textTransform: "uppercase",
        fontFamily: fonts.inter,
        lineHeight: 1,
      },
      h4: {
        fontSize: "22.5px",
      },
  },
  breakpoints: {
    sm: '48em',
    md: '62em',
    lg: '80em',
    xl: '96em',
  }
});
