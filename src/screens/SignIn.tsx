import React, { useState } from "react";
import {
  VStack,
  View,
  Center,
  Image,
  Heading,
  Text,
  FormControl,
  Button,
  Divider,
  Input,
  Pressable,
  Icon,
} from "native-base";
import { myTheme } from "../style/style";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig.js";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const { navigate } = useNavigation();

  const handleSignIn = async () => {
    if (!email || !password) {
      return Alert.alert("Entrar", "Informe Email e Senha!");
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.code);

      if (error.code === "auth/invalid-email") {
        Alert.alert("Error", "Email Inválido ou Senha Inválida");
      }
      if (error.code === "auth/wrong-password") {
        Alert.alert("Error", "Email Inválido ou Senha Inválida");
      }
      if (error.code === "auth/user-not-found") {
        Alert.alert("Error", "Esté usuário não existe");
      }

      return Alert.alert("Error", "Não foi possivel Acessar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View background={myTheme.colors.background} height={"full"}>
      <Center flex={2}>
        <VStack>
          <Image
            size={79}
            alignSelf={"center"}
            source={require("../assets/tecnologia.png")}
            alt="logo"
          />

          <Heading mt={90} ml={1}>
            <Text fontSize={30} color={myTheme.colors.black}>
              Login
            </Text>
          </Heading>
          <Divider background={myTheme.colors.blue} height={1} width={200} />

          <FormControl mt={39}>
            <FormControl.Label ml={1}>
              <Text color={myTheme.colors.black}>Email</Text>
            </FormControl.Label>
            <Input
              mb={4}
              borderColor={myTheme.colors.black}
              onChangeText={setEmail}
              _focus={{
                bg: "blue.200",
                borderColor: myTheme.colors.blue,
              }}
              placeholder="Email"
              w={"88%"}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label ml={1}>
              <Text color={myTheme.colors.black}>Senha</Text>
            </FormControl.Label>
            <Input
              borderColor={myTheme.colors.black}
              w={"88%"}
              type={show ? "text" : "password"}
              onChangeText={setPassword}
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
              placeholder="Password"
              _focus={{
                bg: "blue.200",
                borderColor: myTheme.colors.blue,
              }}
            />

            <FormControl.HelperText mb={2}>
              Esqueceu sua senha?
            </FormControl.HelperText>
          </FormControl>

          <Button
            backgroundColor={myTheme.colors.blue}
            h={42}
            px={"24"}
            borderRadius={"10"}
            alignSelf={"center"}
            mt={19}
            alignItems="center"
            justifyContent="center"
            onPress={handleSignIn}
            isLoading={isLoading}
            textAlign="center"
          >
            <Text color={"white"} fontWeight={"bold"}>
              Login
            </Text>
          </Button>

          <Text color={myTheme.colors.black} textAlign={"center"} mt={55}>
            Não possui uma conta?{" "}
            <Text
              color={myTheme.colors.blue}
              onPress={() => navigate("SignUp")}
            >
              Cadastre-se
            </Text>
          </Text>
        </VStack>
      </Center>
    </View>
  );
}
