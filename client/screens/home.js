import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import styled from "styled-components/native";
import theme from "../config/theme";
import loadFont from "../config/fonts";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const homeImage = require("../assets/img/food.jpg");

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
            <Paragraoh2>
              دارای قابلیت تخصیص لینک و صفحه ی اختصاصی به هر رستوران و ساخت کیو
              آر کد برای شما کافه رستوران داران عزیز.
            </Paragraoh2>
          </TextBox>
        </Col>
      </Row>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <ButtonText>ثبت نام</ButtonText>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
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
const Paragraoh2 = styled.Text`
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
  modalView: {
    position: "absolute",
    bottom: "0px",
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default HomeScreen;
