import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray[800]
    },
    content: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        gap: 16
    },
    header: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
    },
    info: {
        flexDirection: 'row'
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: theme.colors.gray[200]
    },
    title: {
        fontFamily: theme.fontFamily.medium,
        fontSize: 20,
        color: theme.colors.white,
        flex: 1,
        textAlign: 'center',
    }
})