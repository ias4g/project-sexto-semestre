import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

type Props = TouchableOpacityProps & {
    title: string
    isDisabled?: boolean
}

export function Button({ title, isDisabled, ...rest }: Props) {
    return (
        <TouchableOpacity
            disabled={isDisabled}
            activeOpacity={0.7}
            style={[styles.container, isDisabled && styles.disabled]}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}