import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Loja } from "../screens/Loja";
import { myTheme } from "../style/style";
import { Cliente } from "../screens/Cliente";
import { MaterialIcons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { Alert } from "react-native";
import { Processadores } from "../screens/Processadores";
import { Placas } from "../screens/PlacasdeVideo";
import { Ssds } from "../screens/Ssd";

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      Alert.alert("Sair", "Não foi possivel sair.");
    }
  };

  return (
    <Navigator>
      <Screen
        name="Store"
        component={Loja}
        options={{
          title: "Store",

          headerStyle: {
            backgroundColor: myTheme.colors.blue,
          },
          headerTintColor: myTheme.colors.background,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Screen
        name="Departamento de processadores"
        component={Processadores}
        options={{
          title: "Processadores",
          headerStyle: {
            backgroundColor: myTheme.colors.blue,
          },
          headerTintColor: myTheme.colors.white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="Placas de Video"
        component={Placas}
        options={{
          title: "Placas de Video",
          headerStyle: {
            backgroundColor: myTheme.colors.blue,
          },
          headerTintColor: myTheme.colors.white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="Departamento de SSDs"
        component={Ssds}
        options={{
          title: "SSDs",
          headerStyle: {
            backgroundColor: myTheme.colors.blue,
          },
          headerTintColor: myTheme.colors.white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="Cliente"
        component={Cliente}
        options={{
          title: "Perfil",
          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={23}
              style={{ paddingRight: 12 }}
              onPress={handleLogout}
            />
          ),
          headerStyle: {
            backgroundColor: myTheme.colors.white,
          },
          headerTintColor: myTheme.colors.black,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Navigator>
  );
}
