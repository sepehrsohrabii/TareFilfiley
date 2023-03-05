import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import theme from "../config/theme";
import loadFont from "../config/fonts";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useRef, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import SignUpForm from "../components/signUpForm";

SplashScreen.preventAutoHideAsync();

const homeImage = require("../assets/img/food.jpg");

const HomeScreen = ({ navigation }) => {
  const refRBSheet = useRef();

  useEffect(() => {
    loadFont();
  }, []);
  return (
    <Container>
      <Row>
        <ImageBackground
          source={homeImage}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>

        <Col>
          <TextBox>
            <Title>تَره فیلفیلِی</Title>
          </TextBox>
          <TextBox>
            <SubTitle>پلتفرم رایگان منو آنلاین</SubTitle>
          </TextBox>
          <TextBox>
            <Paragraph2>
              دارای قابلیت تخصیص لینک و صفحه ی اختصاصی به هر رستوران و ساخت کیو
              آر کد برای شما کافه رستوران داران عزیز.
            </Paragraph2>
          </TextBox>
        </Col>
      </Row>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          refRBSheet.current.open();
        }}
      >
        <ButtonText>ثبت نام</ButtonText>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        style={styles.bottomSheet}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <SignUpForm />
      </RBSheet>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  max-width: 100%;
  flex-direction: column;
  background: ${theme.colors.one};
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
const TextBox = styled.View`
  width: 100%;
  padding-right: 10%;
  padding-left: 10%;
  margin-bottom: 10%;
`;
const Title = styled.Text`
  font-family: ${theme.typography.heading1.fontFamily};
  font-size: ${theme.typography.heading1.fontSize};
  color: ${theme.colors.white};
`;
const SubTitle = styled.Text`
  font-family: ${theme.typography.subTitle.fontFamily};
  font-size: ${theme.typography.subTitle.fontSize};
  color: ${theme.colors.three};
`;
const Paragraph2 = styled.Text`
  font-family: ${theme.typography.paragraph2.fontFamily};
  font-size: ${theme.typography.paragraph2.fontSize};
  color: ${theme.colors.white};
  text-align: justify;
  line-height: 25px;
  margin-top: 10%;
`;
const ButtonText = styled.Text`
  font-family: ${theme.typography.subTitle_M.fontFamily};
  font-size: ${theme.typography.subTitle_M.fontSize};
  color: ${theme.colors.white};
  text-align: center;
`;
const styles = StyleSheet.create({
  image: {
    flex: 0.5,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    backgroundColor: theme.colors.four,
    borderRadius: "20px",
    padding: "13px",
    left: "15%",
    right: "15%",
    position: "absolute",
    bottom: "7%",
  },
  bottomSheet: {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
});
export default HomeScreen;
