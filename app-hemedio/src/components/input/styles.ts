import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    icon: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: theme.colors.white,
        marginRight: 2,
        // borderRightWidth: 3,
        // borderRightColor: 'transparent'
    },
    group: {
        width: '100%',
        height: 56,
        borderRadius: 4,
        color: '#000000',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        // paddingLeft: 16,
        overflow: 'hidden',
    },
    control: {
        flex: 1,
        height: 56,
        paddingLeft: 16,
        backgroundColor: theme.colors.white,
        fontSize: 16
    },
    nonEditable: {
        // backgroundColor: '#f0f0f0',  // Fundo claro quando o campo não for editável
        // borderColor: '#333',  // Cor da borda quando não editável
        // color: theme.colors.gray[200],  // Cor do texto quando não editável
        opacity: 0.5
    },
    errors: {
        fontSize: 14,
        marginTop: 2,
        color: theme.colors.red[500]
    }
})