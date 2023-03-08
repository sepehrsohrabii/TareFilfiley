import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import theme from "../../config/theme";
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import { Icon } from "@rneui/themed";
import CategoryList from "./categoryList";
import ProductList from "./productList";

const CreateMenuMainForm = ({ navigation }) => {
  const [name, onChangeName] = useState("");
  const [phone, onChangePhone] = useState("");
  const [clocks, onChangeClocks] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView>
      <Padding>
        <Label>نام مجموعه به انگلیسی</Label>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="gol agha ..."
          inputMode="text"
        />
        <Label>عکس عمودی برای صفحه اول</Label>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <ButtonText>انتخاب عکس</ButtonText>
          <Icon type="feather" name="upload-cloud" />
        </TouchableOpacity>
        {/* {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )} */}
        <Label>تلفن تماس</Label>
        <TextInput
          style={styles.input}
          onChangeText={onChangePhone}
          value={phone}
          placeholder="09369671111"
          inputMode="tel"
        />
        <Label>ساعت کاری</Label>
        <TextInput
          style={styles.bigInput}
          onChangeText={onChangeClocks}
          value={clocks}
          placeholder={"صبح ها:\nاز ساعت فلان تا فلان"}
          multiline={true}
          numberOfLines={4}
        />
      </Padding>
      <Padding>
        <Label>دسته بندی ها</Label>
      </Padding>
      <CategoryList />
      <Padding>
        <Label>لیست محصولات</Label>
      </Padding>
      <ProductList />
    </SafeAreaView>
  );
};
const Padding = styled.View`
  padding-left: 30px;
  padding-right: 30px;
`;
const Label = styled.Text`
  font-family: ${theme.typography.label.fontFamily};
  font-size: ${theme.typography.label.fontSize};
  color: ${theme.colors.darkTextColor};
  margin-top: 30px;
  margin-bottom: 10px;
  padding-right: 10px;
`;
const ButtonText = styled.Text`
  font-family: ${theme.typography.subTitle_M.fontFamily};
  font-size: ${theme.typography.subTitle_M.fontSize};
  color: ${theme.colors.darkTextColor};
  text-align: center;
  margin-right: 10px;
`;
const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    textAlign: "right",
    fontFamily: "IS",
    backgroundColor: theme.colors.lightGray,
    borderWidth: 0,
    placeholderTextColor: theme.colors.lightTextColor,
  },
  bigInput: {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    textAlign: "right",
    fontFamily: "IS",
    backgroundColor: theme.colors.lightGray,
    borderWidth: 0,
    placeholderTextColor: theme.colors.lightTextColor,
  },
  button: {
    borderColor: theme.colors.four,
    borderWidth: 2,
    borderRadius: 10,
    padding: "13px",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CreateMenuMainForm;
