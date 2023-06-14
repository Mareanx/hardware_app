import React from "react";
import {
  View,
  Text,
  Box,
  Image,
  Divider,
  VStack,
  HStack,
  List,
} from "native-base";
import { myTheme } from "../style/style";
import { TextInput, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { produtoData } from "../data/produtosMock";
import { ProdutoItem } from "../components/ProdutoItem";
import { ScrollView } from "react-native-gesture-handler";

export function Cliente() {
  const [name, onChangeText] = React.useState("");

  return (
    <View height={"full"} backgroundColor={myTheme.colors.blue}>
      <Image
        size={105}
        alignSelf={"center"}
        source={require("../assets/avatar-do-usuario.png")}
        alt="logo"
        mt={4}
      />

      <Box
        height={800}
        mt={5}
        backgroundColor={myTheme.colors.white}
        borderRadius={42}
        borderBottomRadius={0}
      >
        <Divider mb={4} background={myTheme.colors.blue} />
        <TextInput
          onChangeText={onChangeText}
          value={name}
          placeholder="Edite seu nome"
          textAlign="center"
          maxFontSizeMultiplier={2}
        />
        <VStack mt={10}>
          <HStack space={105}>
            <Text ml={5} fontSize={20}>
              Meus pedidos
            </Text>
            <Text ml={8} fontSize={20}>
              ver todos
            </Text>
          </HStack>
          <Box
            h={75}
            width={"95%"}
            alignSelf={"center"}
            backgroundColor={myTheme.colors.blue}
            borderRadius={10}
            mb={10}
          >
            <Box width={"30%"} mt={2} ml={1}>
              <HStack>
                <TouchableOpacity>
                  <VStack>
                    <Image
                      size={8}
                      alignSelf={"center"}
                      source={require("../assets/pagamento.png")}
                      alt="logo"
                      mr={1}
                    />
                    <Text
                      fontSize={12}
                      color={myTheme.colors.white}
                      ml={2}
                      width={20}
                    >
                      Aguardando pagamento
                    </Text>
                  </VStack>
                </TouchableOpacity>

                <TouchableOpacity>
                  <VStack>
                    <Image
                      size={8}
                      alignSelf={"center"}
                      source={require("../assets/enviando.png")}
                      alt="logo"
                      mr={1}
                    />
                    <Text
                      fontSize={12}
                      color={myTheme.colors.white}
                      ml={3}
                      width={70}
                    >
                      Preparando produto
                    </Text>
                  </VStack>
                </TouchableOpacity>
                <VStack>
                  <Image
                    size={10}
                    alignSelf={"center"}
                    source={require("../assets/entrega-rapida.png")}
                    alt="logo"
                    mr={1}
                  />
                  <Text
                    fontSize={12}
                    color={myTheme.colors.white}
                    ml={4}
                    width={70}
                  >
                    Enviando
                  </Text>
                </VStack>
                <VStack>
                  <Image
                    size={8}
                    alignSelf={"center"}
                    source={require("../assets/rastreamento.png")}
                    alt="logo"
                    mr={1}
                  />
                  <Text
                    fontSize={12}
                    color={myTheme.colors.white}
                    ml={3}
                    width={70}
                  >
                    Rastrear pedido
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Box>
          <Text textAlign={"center"} mb={2} fontSize={20} bold>
            Produtos Recomendados
          </Text>
          <Divider bgColor={myTheme.colors.blue} />
          <Box h={550}>
            <FlatList
              data={produtoData}
              renderItem={({ item }) => <ProdutoItem data={item} />}
              keyExtractor={(item) => item.id}
            />
          </Box>
        </VStack>
      </Box>
    </View>
  );
}
