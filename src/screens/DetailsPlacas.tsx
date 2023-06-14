import React from "react";
import {
  View,
  Heading,
  Input,
  Divider,
  Image,
  VStack,
  Text,
  Center,
  HStack,
  Box,
  Button,
} from "native-base";
import { myTheme } from "../style/style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { placaData } from "../data/placasMock";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TouchableHighlight } from "react-native";

type DetailsParams = {
  id: string;
};

export const PlacasDetails = () => {
  const { params } = useRoute();
  const { id } = params as DetailsParams;
  const { navigate } = useNavigation();

  const placa = placaData.filter((placa) => placa.id === id)[0];

  return (
    <ScrollView>
      <View flex={1} background={myTheme.colors.background} height={"full"}>
        <Center>
          <VStack>
            <Text
              color="coolGray.800"
              textAlign={"center"}
              mt={6}
              fontSize={20}
              mb={4}
              bold
            >
              {placa.nome}
            </Text>
          </VStack>
          <Image
            height={260}
            width={240}
            mt={2}
            mb={2}
            alt={"produto"}
            ml={2}
            mr={1}
            source={{ uri: placa.imagem }}
          />
        </Center>
        <VStack>
          <HStack space={50}>
            <Text fontSize={32} bold ml={2} color={myTheme.colors.blue}>
              {placa.preco}
            </Text>
            <Image
              mt={2}
              width={125}
              height={6}
              source={require("../assets/avaliacao.png")}
              alt={"avaliacao"}
            />
          </HStack>
          <Box width={"55%"}>
            <Text mb={7} ml={4}>
              {placa.info1}
            </Text>
          </Box>
          <TouchableOpacity onPress={() => navigate("Pagamento")}>
            <Button
              width={"80%"}
              height={57}
              alignSelf={"center"}
              mt={6}
              mb={6}
              backgroundColor={myTheme.colors.blue}
            >
              <HStack>
                <Image
                  size={6}
                  source={require("../assets/produtos/sacolas-de-compras.png")}
                  alt="logo"
                  mr={1}
                  alignSelf={"center"}
                />
                <Text
                  fontSize={20}
                  bold
                  color={myTheme.colors.white}
                  alignSelf={"center"}
                >
                  Comprar
                </Text>
              </HStack>
            </Button>
          </TouchableOpacity>

          <Box width={"90%"} alignSelf={"center"}>
            <Text alignSelf={"center"}>{placa.info2}</Text>
          </Box>
          <Text
            color="coolGray.600"
            alignSelf={"center"}
            mt={5}
            width={"70%"}
            fontSize={14}
            letterSpacing={1}
            bold
            mb={10}
            ml={10}
          >
            {placa.info3}
          </Text>
        </VStack>
      </View>
    </ScrollView>
  );
};
