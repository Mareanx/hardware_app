import React from "react";
import { View, Heading, Input, Divider } from "native-base";
import { myTheme } from "../style/style";
import { ProcessadorItem } from "../components/ProcessadorItem";
import { processadorData } from "../data/processadoresMock";
import { FlatList } from "react-native";

export function Processadores({ navigation }) {
  return (
    <View flex={1} background={myTheme.colors.background} height={"full"}>
      <FlatList
        data={processadorData}
        renderItem={({ item }) => <ProcessadorItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
