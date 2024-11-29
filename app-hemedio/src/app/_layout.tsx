import { theme } from '@/theme';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Slot } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync()

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.gray[200] }}>
      <GestureHandlerRootView >
        {fontsLoaded && <Slot />}
        <StatusBar barStyle="dark-content" translucent backgroundColor={theme.colors.gray[200]} />
      </GestureHandlerRootView>
    </SafeAreaView>
  )

}