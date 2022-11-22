import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/700.css";
import "@fontsource/inter/400.css";

export const fonts = {
  inter: "Inter"
};

export const theme = extendTheme({
  colors: {
    white: "#ffffff",
    black: "#141414",
    violet: "#B07BF3",
    yellow: "#F2EE8A",
    "teal-darker": "#39D2B4",
    "teal-light": "#91F9E5",
    "teal-lighter": "#91F9E5D9",
  },
  fonts: {
    heading: fonts.inter,
    body: fonts.inter,
  },
  textStyles: {
      h1: {
        fontSize: ["68px", "108px"],
        fontWeight: "700",
        lineHeight: 1,
        textTransform: "uppercase",
      },
      h2: {
        fontSize: ["38px", "44px", "86px"],
        fontWeight: "700",
        lineHeight: 1,
        textTransform: "uppercase",
      },
      h3: {
        fontSize: ["24px", "28px", "55px"],
        fontWeight: "700",
        lineHeight: 1,
        textTransform: "uppercase",
      },
      h4: {
        fontSize: ["18px", "20px", "22.5px"],
        fontWeight: "700",
        textTransform: "uppercase",
      },
      h5: {
        fontSize: ["14px", "16px", "18px"],
        fontWeight: "700",
      },
      p1: {
        fontWeight: "600",
        fontSize: ["14px", "18px", "22.5px"],
      },
      p2: {
        fontWeight: "400",
        fontSize: ["14px", "16px", "18px"],
      },
      p3: {
        fontWeight: "400",
        fontSize: ["14px", "14.4px"],
      },
      p4: {
        fontWeight: "400",
        fontSize: ["12px", "12.4px"],
      },
      p5: {
        fontWeight: "400",
        fontSize: "10px"
      }
  },
  breakpoints: {
    sm: '48em',
    md: '72em',
    lg: '80em',
    xl: '96em',
  }
});
