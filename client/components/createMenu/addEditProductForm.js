import { Icon } from "@rneui/base";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";
import theme from "../../config/theme";

const AddEditProductForm = ({ bottomSheet, title, desc, price, img }) => {
  const [image, setImage] = useState(img);
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
  const [productName, onChangeProductName] = useState("");
  const [productDesc, onChangeProductDesc] = useState("");
  const [productPrice, onChangeProductPrice] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.box}>
        <View>
          {image && <Image source={{ uri: image }} style={styles.imgBox} />}
        </View>
        <View style={styles.imgInputBox}>
          <Label>عکس محصول</Label>
          <View style={styles.buttonBoxWidth}>
            <TouchableOpacity
              style={styles.buttonDelete}
              onPress={() => {
                bottomSheet.current.close();
              }}
            >
              <Icon
                type="material"
                name="delete-forever"
                color={theme.colors.four}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
              <Icon
                type="feather"
                name="upload-cloud"
                color={theme.colors.one}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Label style={styles.label}>نام محصول</Label>
      <TextInput
        style={styles.input}
        onChangeText={onChangeProductName}
        value={title}
        placeholder="کوفت ..."
        inputMode="text"
      />
      <Label style={styles.label}>توضیحات محصول</Label>
      <TextInput
        style={styles.descInput}
        onChangeText={onChangeProductDesc}
        value={desc}
        placeholder="کوفت ..."
        inputMode="text"
        multiline={true}
        numberOfLines={4}
      />
      <Label style={styles.label}>قیمت به تومان</Label>
      <TextInput
        style={styles.input}
        onChangeText={onChangeProductPrice}
        value={price}
        placeholder="۳۶۰۰"
        inputMode="numeric"
      />
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.buttonDelete2}
          onPress={() => {
            bottomSheet.current.close();
          }}
        >
          <Icon
            type="material"
            name="delete-forever"
            color={theme.colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            bottomSheet.current.close();
          }}
        >
          <ButtonText>ثبت</ButtonText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const Label = styled.Text`
  font-family: ${theme.typography.label.fontFamily};
  font-size: ${theme.typography.label.fontSize};
  color: ${theme.colors.darkTextColor};
  margin-bottom: 10px;
  padding-right: 10px;
`;
const ButtonText = styled.Text`
  font-family: ${theme.typography.subTitle_M.fontFamily};
  font-size: ${theme.typography.subTitle_M.fontSize};
  color: ${theme.colors.white};
  text-align: center;
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
  descInput: {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    textAlign: "right",
    fontFamily: "IS",
    backgroundColor: theme.colors.lightGray,
    borderWidth: 0,
    placeholderTextColor: theme.colors.lightTextColor,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  buttonBoxWidth: {
    flexDirection: "row",
    justifyContent: "right",
    flex: 1,
    alignItems: "center",
  },
  button: {
    flex: 0.8,
    backgroundColor: theme.colors.one,
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
  },
  imageButton: {
    padding: "13px",
  },
  buttonDelete: {
    flex: 0.2,
    borderRadius: 10,
    padding: "13px",
  },
  buttonDelete2: {
    flex: 0.1,
    backgroundColor: theme.colors.four,
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
  },
  imgPreBox: {
    height: 100,
    width: 100,
    borderRadius: 10,
    borderColor: theme.colors.one,
    borderWidth: 1,
  },
  imgBox: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  imgInputBox: {
    flex: 0.9,
  },
  label: {
    marginTop: 30,
  },
});

export default AddEditProductForm;
