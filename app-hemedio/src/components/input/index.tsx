import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Controller, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";
import clsx from "clsx";

type Props = {
    error?: string
    icon: keyof typeof MaterialCommunityIcons.glyphMap
    formProps: UseControllerProps
    inputProps: TextInputProps
}

export const Input = forwardRef<TextInput, Props>(({ error, icon, formProps, inputProps }, ref) => {
    const isEditable = inputProps.editable !== false

    return (
        <Controller
            render={({ field }) => (
                <View style={styles.container}>
                    <View style={[styles.group, !isEditable && styles.nonEditable]}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons
                                size={24}
                                name={icon}
                                color={clsx({
                                    [theme.colors.red[500]]: error,
                                    [theme.colors.teal[600]]: (!error && field.value),
                                    [theme.colors.blue[700]]: (!field.value && !error)
                                })}
                            />
                        </View>
                        <TextInput
                            value={field.value}
                            onChangeText={field.onChange}
                            ref={ref}
                            style={styles.control}
                            {...inputProps}
                        />
                    </View>
                    {
                        error && (
                            <Text style={styles.errors}>
                                {error}
                            </Text>
                        )
                    }
                </View>
            )}
            {...formProps}
        />
    )
})