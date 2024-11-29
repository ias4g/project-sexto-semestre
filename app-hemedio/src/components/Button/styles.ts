import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.teal[600]
    },
    disabled: {
        opacity: 0.5
    },
    title: {
        width: '100%',
        textAlign: 'center',
        color: theme.colors.white,
        fontSize: 16,
        textTransform: 'uppercase'
    }
})