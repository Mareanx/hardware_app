import React from "react";
import { View, Heading, Input, Divider } from "native-base";
import { myTheme } from "../style/style";
import { Listassd } from "../components/ssdList";

export function Ssds({ navigation }) {
  return (
    <View flex={1} background={myTheme.colors.background} height={"full"}>
      <Divider height={0.5} backgroundColor={myTheme.colors.blue} />
      <Listassd />
    </View>
  );
}
