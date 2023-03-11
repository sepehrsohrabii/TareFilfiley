import { Icon } from "@rneui/base";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import theme from "../../config/theme";

const AddEditCategoryForm = ({ bottomSheet, title }) => {
  const [categoryName, onChangeCategoryName] = useState("");
  return (
    <SafeAreaView>
      <Label>نام دسته‌بندی</Label>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCategoryName}
        value={title}
        placeholder="نوشیدنی ..."
        inputMode="text"
      />
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.buttonDelete}
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
  margin-top: 30px;
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
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 0.95,
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
    marginTop: 30,
  },
  buttonDelete: {
    felx: 0.2,
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
    marginTop: 30,
  },
});

export default AddEditCategoryForm;
