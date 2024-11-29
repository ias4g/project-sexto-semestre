import { FormStepOne } from '@/screens/FormStepOne'
import { FormStepTwo } from '@/screens/FormStepOne copy'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export function RoutesSteps() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='formStepOne' component={FormStepOne} />
            <Screen name='formStepTwo' component={FormStepTwo} />
        </Navigator>
    )
}