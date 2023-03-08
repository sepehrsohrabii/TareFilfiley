import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useState } from "react";
import styled from "styled-components/native";
import theme from "../config/theme";
import RBSheet from "react-native-raw-bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateMenuMainForm from "../components/createMenu/createMenuMainForm";

const CreateMenu = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.titleBox}>
        <Title>گل آقا</Title>
        <SubTitle>ساخت منو</SubTitle>
      </View>
      <CreateMenuMainForm />
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  max-width: 100%;
  flex-direction: column;
  background: ${theme.colors.white};
`;
const Title = styled.Text`
  font-family: ${theme.typography.heading2.fontFamily};
  font-size: ${theme.typography.heading2.fontSize};
  color: ${theme.colors.two};
  margin-top: 40px;
  text-align: center;
`;
const SubTitle = styled.Text`
  font-family: ${theme.typography.paragraph2.fontFamily};
  font-size: ${theme.typography.paragraph2.fontSize};
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;
const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: theme.colors.one,
    textAlign: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: "40px",
    shadowColor: "#000000",
    shadowOffset: {
      width: -1,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
export default CreateMenu;
