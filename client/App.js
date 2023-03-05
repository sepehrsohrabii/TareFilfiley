import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./layout/layout";
import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Layout />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
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
