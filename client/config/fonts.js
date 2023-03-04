import * as Font from "expo-font";
const loadFont = async () => {
  await Font.loadAsync({
    "IS": require("../assets/fonts/IRANSansMobile.ttf"),
    "IS_Black": require("../assets/fonts/IRANSansMobile_Black.ttf"),
    "IS_Bold": require("../assets/fonts/IRANSansMobile_Bold.ttf"),
    "IS_Light": require("../assets/fonts/IRANSansMobile_Light.ttf"),
    "IS_Medium": require("../assets/fonts/IRANSansMobile_Medium.ttf"),
    "IS_UltraLight": require("../assets/fonts/IRANSansMobile_UltraLight.ttf"),
  });
};

export default loadFont;
