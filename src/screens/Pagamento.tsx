import React from "react";
import {
  View,
  Radio,
  Text,
  Center,
  Box,
  Heading,
  Image,
  HStack,
} from "native-base";
import { myTheme } from "../style/style";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

export function Pagamento() {
  return (
    <View flex={1} background={myTheme.colors.white} height={"full"}>
      <Heading mb={30} mt={39} alignSelf={"center"}>
        <Text>Selecione o metodo de pagamento desejado:</Text>
      </Heading>

      <TouchableOpacity>
        <Box
          width={335}
          height={85}
          background={"gray.200"}
          mb={5}
          borderRadius={7}
          alignSelf={"center"}
        >
          <HStack space={30}>
            <Text px={7} py={7} fontSize={20} bold>
              Cartão de Credito
            </Text>
            <Image
              mt={6}
              size={39}
              source={require("../assets/cartao.png")}
              alt={"cartao"}
            />
          </HStack>
        </Box>
      </TouchableOpacity>

      <TouchableOpacity>
        <Box
          width={335}
          height={85}
          background={"gray.200"}
          mb={5}
          borderRadius={7}
          alignSelf={"center"}
        >
          <HStack space={35}>
            <Text px={7} py={7} fontSize={20} bold>
              Cartão de Debito
            </Text>
            <Image
              mt={6}
              size={39}
              source={require("../assets/cartaodebito.png")}
              alt={"cartao"}
            />
          </HStack>
        </Box>
      </TouchableOpacity>
      <TouchableOpacity>
        <Box
          width={335}
          height={85}
          background={"gray.200"}
          borderRadius={7}
          alignSelf={"center"}
        >
          <HStack space={135}>
            <Text px={8} py={7} fontSize={20} bold>
              Pix
            </Text>
            <Image
              mt={6}
              size={39}
              source={require("../assets/pix.png")}
              alt={"cartao"}
            />
          </HStack>
        </Box>
      </TouchableOpacity>
    </View>
  );
}
