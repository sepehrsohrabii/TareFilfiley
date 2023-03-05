import * as React from "react";
import { TextInput } from "react-native-paper";

const SignUpForm = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      mode="outlined"
      label="Email"
      value={text}
      onChangeText={(text) => setText(text)}
    />
  );
};

export default SignUpForm;
