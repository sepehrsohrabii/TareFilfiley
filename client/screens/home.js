import { View, Text, ImageBackground, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import theme from "../config/theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const screenWidth = Dimensions.get("window").width;

const homeImage = require("../assets/img/food.jpg");

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "IRANSans-Mobile": require("../assets/fonts/IRANSansMobile(FaNum).ttf"),
  });
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <Container>
      <Row>
        <ImageBackground
          source={homeImage}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>

        <Col>
          <Text style={styles.title}>تایتل جدید</Text>
        </Col>
      </Row>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  max-width: 100%;
  flex-direction: column;
  background: ${theme.colors.darkGreen};
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Col = styled.View`
  flex: 0.5;
  align-self: center;
  text-align: right;
`;
const Title = styled.Text`
  font-family: "IRANSansMobile";
  font-size: 42px;
`;
const styles = StyleSheet.create({
  image: {
    flex: 0.5,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontFamily: "IRANSans-Mobile",
    fontSize: "42px",
  },
});
export default HomeScreen;
