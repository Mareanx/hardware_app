import React from "react";
import { View, Heading, Input, Divider } from "native-base";
import { myTheme } from "../style/style";
import { produtoData } from "../data/produtosMock";
import { ProdutoItem } from "../components/ProdutoItem";
import { FlatList } from "react-native";

export function Loja() {
  return (
    <View flex={1} background={myTheme.colors.background} height={"full"}>
      <Input
        width={"95%"}
        alignSelf={"center"}
        mt={2}
        borderColor={myTheme.colors.black}
        placeholder="pesquisar produto"
      />
      <Heading textAlign={"center"} mb={2} mt={5}>
        Mais vendidos
      </Heading>
      <Divider height={0.5} backgroundColor={myTheme.colors.blue} />

      <FlatList
        data={produtoData}
        renderItem={({ item }) => <ProdutoItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Loja;
