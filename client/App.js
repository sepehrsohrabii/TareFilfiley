import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./layout/layout";
import loadFont from "./config/fonts";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    loadFont();
  }, []);
  return (
    <View style={styles.container}>
      <Layout />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#184D47",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
