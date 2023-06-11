import { Center, Spinner } from "native-base";
import { myTheme } from "../style/style";

export const Loading = () => {
  return (
    <Center flex={1} bg="white">
      <Spinner color={myTheme.colors.blue} size="lg" />
    </Center>
  );
};
