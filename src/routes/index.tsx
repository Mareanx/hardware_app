import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

import { myTheme } from "../style/style";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: myTheme.colors.background,
  },
};

export function Routes() {
  return (
    <NavigationContainer theme={theme}>
      <StackRoutes />
    </NavigationContainer>
  );
}
