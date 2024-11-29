import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderWidth: 2,
    borderRadius: 32,
    // borderColor: theme.colors.black,
  },
  selected: {
    borderWidth: 2,
    borderColor: theme.colors.blue[700]
  }
})