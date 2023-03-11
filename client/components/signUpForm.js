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
import theme from "../config/theme";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const SignUpForm = ({ bottomSheet }) => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Title>ثبت نام</Title>
      <Label>نام کافه یا رستوران</Label>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="گل آقا ..."
        inputMode="text"
      />
      <Label>آدرس ایمیل</Label>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="golagha@gmail.com"
        inputMode="email"
      />
      <Label>کلمه عبور</Label>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="*******"
      />
      <CheckBox
        right
        iconRight
        fontFamily="IS_UltraLight"
        textStyle={styles.checkBoxText}
        containerStyle={styles.checkBox}
        checked={checked}
        onPress={toggleCheckbox}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checkedColor={theme.colors.one}
        title="با قوانین و مقرات پلتفرم تره فیلفیلی موافقم."
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Restaurants");
          bottomSheet.current.close();
        }}
      >
        <ButtonText>ثبت نام</ButtonText>
      </TouchableOpacity>
      {/* <DividerView>
        <View>
          <Divider width={1} inset={true} color={theme.colors.black} />
        </View>
        <DividerText>یا</DividerText>
        <View>
          <Divider width={1} inset={true} color={theme.colors.black} />
        </View>
      </DividerView> */}
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
const Title = styled.Text`
  font-family: ${theme.typography.heading4.fontFamily};
  font-size: ${theme.typography.heading4.fontSize};
  color: ${theme.colors.one};
  margin-bottom: 30px;
  margin-top: 30px;
`;
const ButtonText = styled.Text`
  font-family: ${theme.typography.subTitle_M.fontFamily};
  font-size: ${theme.typography.subTitle_M.fontSize};
  color: ${theme.colors.white};
  text-align: center;
`;
// const DividerView = styled.View`
//   display: flex;
//   flex-direction: row;
//   margin-vertical: 10px;
// `;
// const DividerText = styled.Text`
//   font-family: ${theme.typography.smallest.fontFamily};
//   font-size: ${theme.typography.smallest.fontSize};
//   color: ${theme.colors.darkTextColor};
//   text-align: center;
// `;
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
    marginBottom: 20,
    placeholderTextColor: theme.colors.lightTextColor,
  },
  checkBoxText: {
    fontFamily: theme.typography.small.fontFamily,
    fontSize: theme.typography.small.fontSize,
  },
  checkBox: {
    padding: 0,
    marginRight: 0,
  },
  button: {
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
});

export default SignUpForm;
