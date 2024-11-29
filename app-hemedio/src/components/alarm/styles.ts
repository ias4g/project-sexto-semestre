import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
    borderRadius: 20,
    gap: 4,
    backgroundColor: theme.colors.white
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    color: theme.colors.gray[800],
    fontFamily: theme.fontFamily.medium
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 50
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {}
})