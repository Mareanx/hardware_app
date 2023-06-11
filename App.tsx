import "react-native-gesture-handler";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { myTheme } from "./src/style/style";
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={myTheme.colors.blue}
      />
      <Routes />
    </NativeBaseProvider>
  );
}
