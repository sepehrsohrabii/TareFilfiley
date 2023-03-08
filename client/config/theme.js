import loadFont from "./fonts";

loadFont();

const theme = {
  typography: {
    heading1: {
      fontSize: "64px",
      fontFamily: "IS_Bold",
    },
    heading2: {
      fontSize: "48px",
      fontFamily: "IS_Bold",
    },
    heading3: {
      fontSize: "32px",
      fontFamily: "IS_Bold",
    },
    heading4: {
      fontSize: "24px",
      fontFamily: "IS_Bold",
    },
    label: {
      fontSize: "16px",
      fontFamily: "IS",
    },
    subTitle: {
      fontSize: "18px",
      fontFamily: "IS",
    },
    subTitle_M: {
      fontSize: "18px",
      fontFamily: "IS_Medium",
    },
    paragraph2: {
      fontSize: "16px",
      fontFamily: "IS",
    },
    small: {
      fontSize: "14px",
      fontFamily: "IS_UltraLight",
    },
    smallest: {
      fontSize: "12px",
      fontFamily: "IS_UltraLight",
    },
  },
  colors: {
    one: "#184D47",
    two: "#96BB7C",
    three: "#FAD586",
    four: "#C64756",
    darkGray: "#303030",
    lightGray: "#e0e0e0",
    lightTextColor: "#8e8e8e",
    defaultTextColor: "#353740",
    darkTextColor: "#202123",
    white: "#FFFFFF",
    black: "#000000",
  },
};
export default theme;
