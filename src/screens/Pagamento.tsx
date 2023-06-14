import React from "react";
import { View, Radio, Text, Center, Box, Heading } from "native-base";
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

      <Box
        width={335}
        height={85}
        background={"gray.200"}
        mb={5}
        borderRadius={7}
        alignSelf={"center"}
      >
        <Text px={7} py={7} fontSize={20} bold>
          Cartão de Credito
        </Text>
      </Box>
      <Box
        width={335}
        height={85}
        background={"gray.200"}
        mb={5}
        borderRadius={7}
        alignSelf={"center"}
      >
        <Text px={7} py={7} fontSize={20} bold>
          Cartão de Debito
        </Text>
      </Box>
      <TouchableOpacity>
        <Box
          width={335}
          height={85}
          background={"gray.200"}
          borderRadius={7}
          alignSelf={"center"}
        >
          <Text px={7} py={7} fontSize={20} bold>
            Pix
          </Text>
        </Box>
      </TouchableOpacity>
    </View>
  );
}
