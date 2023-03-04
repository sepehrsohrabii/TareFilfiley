import loadFont from "./fonts";

loadFont();

const theme = {
  typography: {
    heading1: {
      fontSize: "64px",
      fontFamily: "IS_Bold",
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
  },
  colors: {
    one: "#184D47",
    two: "#96BB7C",
    three: "#FAD586",
    four: "#C64756",
    darkGray: "#303030",
    defaultTextColor: "#353740",
    darkTextColor: "#202123",
    white: "#FFFFFF",
  },
};
export default theme;
