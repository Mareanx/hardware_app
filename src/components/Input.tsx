import { Input as NativeBaseInput } from "native-base";
import { myTheme } from "../style/style";

export function Input() {
  return (
    <NativeBaseInput
      bgColor={myTheme.colors.background}
      borderRadius={5}
      borderColor={myTheme.colors.black}
      alignSelf={"center"}
      fontSize={15}
      color={"gray.600"}
      cursorColor={"black"}
      variant={"outline"}
    />
  );
}
