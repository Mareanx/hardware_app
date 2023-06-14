import { Box, Button, HStack, Image, Text, VStack, View } from "native-base";
import { myTheme } from "../style/style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type PlacaItemDataProps = {
  data: PlacaItem;
};

type PlacaItem = {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  preco: string;
};

export function PlacaItem({ data }: PlacaItemDataProps) {
  const { navigate } = useNavigation();

  return (
    <Box
      backgroundColor={"#F9F9F9"}
      width={"100%"}
      h={235}
      shadow={"1"}
      borderColor="muted.800"
      py={1}
      mt={5}
      mb={7}
      borderRadius={6}
    >
      <TouchableOpacity
        onPress={() => navigate("DetailsPlacas", { id: data.id })}
      >
        <HStack ml={2}>
          <Image
            height={130}
            width={107}
            mt={10}
            alt={"produto"}
            ml={2}
            mr={1}
            source={{ uri: data.imagem }}
          />
          <VStack>
            <Text
              color="coolGray.800"
              textAlign={"center"}
              width={"27%"}
              mt={3}
              fontSize={17}
              mr={2}
              mb={4}
              bold
            >
              {data.nome}
            </Text>
            <Text
              color="coolGray.600"
              textAlign={"center"}
              width={"25%"}
              ml={3}
              mb={2}
              fontSize={11}
            >
              {data.descricao}
            </Text>
          </VStack>
        </HStack>
        <HStack space={2} ml={139}>
          <Text
            fontSize={23}
            mb={2}
            ml={2}
            mr={2}
            color={myTheme.colors.blue}
            bold
          >
            {data.preco}
          </Text>
          <Button
            mb={5}
            ml={1}
            height={10}
            width={60}
            background={myTheme.colors.blue}
          >
            <Image
              size={6}
              source={require("../assets/produtos/sacolas-de-compras.png")}
              alt="logo"
              mr={1}
            />
          </Button>
        </HStack>
      </TouchableOpacity>
    </Box>
  );
}
