import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        gap: 16,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.gray[200]
    },

    title: {
        fontSize: 24,
        color: theme.colors.gray[600],
        // textAlign: 'center',
        // color: theme.colors.black,
        fontFamily: theme.fontFamily.bold,
        marginBottom: 32
    }
})  