import React from "react";
import { View, Heading, Input, Divider } from "native-base";
import { myTheme } from "../style/style";
import { Lista } from "../components/productsList";
import { ListaPlaca } from "../components/placaList";

export function Placas({ navigation }) {
  return (
    <View flex={1} background={myTheme.colors.background} height={"full"}>
      <Divider height={0.5} backgroundColor={myTheme.colors.blue} />
      <ListaPlaca />
    </View>
  );
}
