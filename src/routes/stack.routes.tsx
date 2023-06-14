import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { myTheme } from "../style/style";
import { DrawerRoutes } from "./drawer.routes";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { Loading } from "../components/Loading";
import { Details } from "../screens/Details";
import { ProcessadorDetails } from "../screens/DetailsProcessador";
import { Pagamento } from "../screens/Pagamento";
import Loja from "../screens/Loja";
import { PlacasDetails } from "../screens/DetailsPlacas";
import { SsdDetails } from "../screens/DetailsSsd";

export function StackRoutes() {
  const { Screen, Navigator } = createStackNavigator();

  const [isLoading, setLoading] = useState(true);
  const [userLog, setUserLog] = useState<User>();

  const userLogged = () => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setUserLog(user);
    });
  };

  useEffect(() => {
    userLogged();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {userLog ? (
        <>
          <Screen name="Loja" component={DrawerRoutes} />
          <Screen name="Home" component={Loja} />

          <Screen
            name="DetailsSsd"
            component={SsdDetails}
            options={{
              headerShown: true,
              headerTitle: "",
              headerStyle: {
                backgroundColor: myTheme.colors.blue,
              },
              headerTintColor: myTheme.colors.white,
            }}
          />

          <Screen
            name="DetailsPlacas"
            component={PlacasDetails}
            options={{
              headerShown: true,
              headerTitle: "",
              headerStyle: {
                backgroundColor: myTheme.colors.blue,
              },
              headerTintColor: myTheme.colors.white,
            }}
          />

          <Screen
            name="DetailsProcessador"
            component={ProcessadorDetails}
            options={{
              headerShown: true,
              headerTitle: "",
              headerStyle: {
                backgroundColor: myTheme.colors.blue,
              },
              headerTintColor: myTheme.colors.white,
            }}
          />
          <Screen
            name="Pagamento"
            component={Pagamento}
            options={{
              headerShown: true,
              headerTitle: "Metodo de Pagamento",
              headerStyle: {
                backgroundColor: myTheme.colors.blue,
              },
              headerTintColor: myTheme.colors.white,
            }}
          />
          <Screen
            name="Details"
            component={Details}
            options={{
              headerShown: true,
              headerTitle: "",
              headerStyle: {
                backgroundColor: myTheme.colors.blue,
              },
              headerTintColor: myTheme.colors.white,
            }}
          />
        </>
      ) : (
        <>
          <Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: "Sign In",

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
            name="SignUp"
            component={SignUp}
            options={{
              title: "Sign Up",

              headerStyle: {
                backgroundColor: myTheme.colors.blue,
              },
              headerTintColor: myTheme.colors.background,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </>
      )}
    </Navigator>
  );
}
