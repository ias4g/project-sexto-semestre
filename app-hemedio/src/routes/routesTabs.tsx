import { createNativeStackNavigator } from '@react-navigation/native-stack'
import tabs from '@/app/(stack)/(tabs)'

const { Navigator, Screen } = createNativeStackNavigator()

export function RoutesTabs() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='formStepOne' component={tabs} />
        </Navigator>
    )
}