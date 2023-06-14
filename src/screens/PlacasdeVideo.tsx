import React from "react";
import { View, Heading, Input, Divider } from "native-base";
import { myTheme } from "../style/style";
import { PlacaItem } from "../components/PlacaItem";
import { placaData } from "../data/placasMock";
import { FlatList } from "react-native";

export function Placas({ navigation }) {
  return (
    <View flex={1} background={myTheme.colors.background} height={"full"}>
      <FlatList
        data={placaData}
        renderItem={({ item }) => <PlacaItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
