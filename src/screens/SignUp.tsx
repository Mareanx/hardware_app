import "react-native-gesture-handler";
import {
  Text,
  Heading,
  VStack,
  FormControl,
  HStack,
  Button,
  Checkbox,
  Center,
  Divider,
  Input,
  Pressable,
  Icon,
} from "native-base";
import { myTheme } from "../style/style";
import { userController } from "../controllers/userController";
import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [show, setShow] = useState(false);

  const { navigate } = useNavigation();

  const handleCreateUser = async () => {
    try {
      setIsLoading(true);
      await userController.create({
        nome,
        cpf,
        dataNascimento,
        telefone,
        email,
        senha,
      });

      Alert.alert("Cadastrado com sucesso!!");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao Cadastrar usuário");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack bgColor={myTheme.colors.background} height={"full"}>
      <Center flex={1}>
        <Heading mr={161}>
          <Text color={myTheme.colors.black}>Crie uma conta</Text>
        </Heading>
        <Divider
          width={245}
          mr={85}
          mb={6}
          height={1}
          background={myTheme.colors.blue}
        />
        <VStack>
          <FormControl>
            <FormControl.Label ml={5}>
              <Text color={myTheme.colors.black}>Nome</Text>
            </FormControl.Label>
          </FormControl>
          <Input
            width={"90%"}
            alignSelf={"center"}
            variant={"outline"}
            borderColor={myTheme.colors.black}
            onChangeText={setNome}
            _focus={{
              bg: "blue.200",
              borderColor: myTheme.colors.blue,
            }}
          />
          <HStack space={1} px={5}>
            <FormControl width={"1/2"}>
              <FormControl.Label ml={1} mt={"2"}>
                <Text color={myTheme.colors.black}>CPF</Text>
              </FormControl.Label>
              <Input
                variant={"outline"}
                borderColor={myTheme.colors.black}
                keyboardType="numeric"
                onChangeText={setCpf}
                _focus={{
                  bg: "blue.200",
                  borderColor: myTheme.colors.blue,
                }}
              />
            </FormControl>
            <FormControl width={"1/2"}>
              <FormControl.Label ml={1} mt={"2"}>
                <Text color={myTheme.colors.black}>Data de Nasc.</Text>
              </FormControl.Label>
              <Input
                variant={"outline"}
                borderColor={myTheme.colors.black}
                onChangeText={setDataNascimento}
                _focus={{
                  bg: "blue.200",
                  borderColor: myTheme.colors.blue,
                }}
              />
            </FormControl>
          </HStack>
          <FormControl>
            <FormControl.Label ml={5}>
              <Text color={myTheme.colors.black}>Telefone</Text>
            </FormControl.Label>
          </FormControl>
          <Input
            width={"90%"}
            alignSelf={"center"}
            variant={"outline"}
            keyboardType="numeric"
            onChangeText={setTelefone}
            borderColor={myTheme.colors.black}
            _focus={{
              bg: "blue.200",
              borderColor: myTheme.colors.blue,
            }}
          />
          <FormControl>
            <FormControl.Label ml={5}>
              <Text color={myTheme.colors.black}>Email</Text>
            </FormControl.Label>
          </FormControl>
          <Input
            width={"90%"}
            alignSelf={"center"}
            variant={"outline"}
            borderColor={myTheme.colors.black}
            onChangeText={setEmail}
            _focus={{
              bg: "blue.200",
              borderColor: myTheme.colors.blue,
            }}
          />
          <FormControl alignSelf={"center"}>
            <FormControl.Label ml={1}>
              <Text mt={1} color={myTheme.colors.black}>
                Senha
              </Text>
            </FormControl.Label>

            <Input
              borderColor={myTheme.colors.black}
              w={"90%"}
              type={show ? "text" : "password"}
              onChangeText={setSenha}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              _focus={{
                bg: "blue.200",
                borderColor: myTheme.colors.blue,
              }}
            />

            <FormControl.HelperText ml={1}>
              sua senha deve ter no minimo 6 caracteres
            </FormControl.HelperText>
          </FormControl>
          <HStack space={1} alignSelf={"center"} mt={10}>
            <Checkbox value={"agree"} aria-label="politicas de privacidade" />
            <Text>Concordo com as politicas de privacidade</Text>
          </HStack>

          <Button
            backgroundColor={myTheme.colors.blue}
            h={43}
            px={"1/4"}
            borderRadius={"10"}
            alignSelf={"center"}
            mt={8}
            title="go to store"
            isLoading={isLoading}
            onPress={handleCreateUser}
          >
            <Text fontWeight={"bold"} fontSize={16} color={"white"}>
              Cadastrar-se
            </Text>
          </Button>
        </VStack>
      </Center>
    </VStack>
  );
}

export default SignUp;
