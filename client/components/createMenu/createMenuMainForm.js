import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";
import theme from "../../config/theme";
import * as ImagePicker from "expo-image-picker";
import { Icon } from "@rneui/themed";
import CategoryList from "./categoryList";
import ProductList from "./productList";
import RBSheet from "react-native-raw-bottom-sheet";
import AddEditProductForm from "./addEditProductForm";

const CreateMenuMainForm = ({ navigation }) => {
  const [name, onChangeName] = useState("");
  const [phone, onChangePhone] = useState("");
  const [clocks, onChangeClocks] = useState("");
  const [image, setImage] = useState(null);
  const refProductSheet = useRef();

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
        <View style={styles.productListTitleBox}>
          <TouchableOpacity
            onPress={() => {
              refProductSheet.current.open();
            }}
          >
            <View style={styles.addProduct}>
              <Icon type="material" name="add" color={theme.colors.white} />
            </View>
          </TouchableOpacity>
          <RBSheet
            ref={refProductSheet}
            closeOnDragDown={true}
            height={700}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              container: {
                backgroundColor: theme.colors.white,
                paddingHorizontal: 60,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: -5,
                },
                shadowOpacity: 0.2,
                shadowRadius: 6.27,

                elevation: 10,
              },
              draggableIcon: {
                backgroundColor: theme.colors.one,
              },
            }}
          >
            <AddEditProductForm bottomSheet={refProductSheet} />
          </RBSheet>
          <ProductListLabel>لیست محصولات</ProductListLabel>
        </View>
        <ProductList />
      </Padding>
    </SafeAreaView>
  );
};
const Padding = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  overflow: hidden;
`;
const Label = styled.Text`
  font-family: ${theme.typography.label.fontFamily};
  font-size: ${theme.typography.label.fontSize};
  color: ${theme.colors.darkTextColor};
  margin-top: 30px;
  margin-bottom: 10px;
  padding-right: 10px;
`;
const ProductListLabel = styled.Text`
  font-family: ${theme.typography.label.fontFamily};
  font-size: ${theme.typography.label.fontSize};
  color: ${theme.colors.darkTextColor};
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
  productListTitleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
    paddingRight: 10,
  },
  addProduct: {
    backgroundColor: theme.colors.four,
    borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CreateMenuMainForm;
