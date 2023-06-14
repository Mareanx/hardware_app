import React from "react";
import { View, Heading, Input, Divider } from "native-base";
import { myTheme } from "../style/style";
import { ssdData } from "../data/ssdMock";
import { SsdItem } from "../components/SsdItem";
import { FlatList } from "react-native";

export function Ssds({ navigation }) {
  return (
    <View flex={1} background={myTheme.colors.background} height={"full"}>
      <Divider height={0.5} backgroundColor={myTheme.colors.blue} />
      <FlatList
        data={ssdData}
        renderItem={({ item }) => <SsdItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
