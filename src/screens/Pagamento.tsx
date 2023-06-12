import React from "react";
import { View, Radio, Text, Center, Box, Heading } from "native-base";
import { myTheme } from "../style/style";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@react-navigation/stack";

export function Pagamento() {
  const [value, setValue] = React.useState("");
  return (
    <View flex={1} background={myTheme.colors.white}>
      <Center height={"full"}>
        <Heading mb={30}>
          <Text>Selecione o metodo de pagamento desejado:</Text>
        </Heading>
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="tipo de pagamento"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue);
          }}
        >
          <Box
            width={335}
            height={85}
            background={"gray.200"}
            mb={5}
            borderRadius={7}
            alignSelf={"center"}
          >
            <Radio value="credito" my={10} mx={5}>
              Cartão de Credito
            </Radio>
          </Box>
          <Box
            width={335}
            height={85}
            background={"gray.200"}
            mb={5}
            borderRadius={7}
          >
            <Radio value="two" my={10} mx={5}>
              Cartão de Debito
            </Radio>
          </Box>
          <Box width={335} height={85} background={"gray.200"} borderRadius={7}>
            <Radio value="three" my={10} mx={5}>
              Three
            </Radio>
          </Box>
        </Radio.Group>
      </Center>
    </View>
  );
}
