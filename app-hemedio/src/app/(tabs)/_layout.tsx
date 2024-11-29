import { Avatar } from "@/components/avatar";
import { NewAlarm } from "@/components/new-alarm";
import { theme } from "@/theme";
import BottomSheet from "@gorhom/bottom-sheet";
import { Tabs } from "expo-router";
import { House, PlusCircle } from "phosphor-react-native";
import { useRef } from "react";
import { View } from "react-native";

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.blue[700],
          tabBarInactiveTintColor: theme.colors.blue[700],
          tabBarStyle: {
            backgroundColor: theme.colors.gray[200],
            borderColor: theme.colors.blue[700],
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <House
                weight={focused ? "fill" : "regular"}
                color={color}
                size={36}
              // style={focused ? { opacity: 1 } : { opacity: 0.6 }}
              />
            )
          }}
        />
        <Tabs.Screen
          name="new"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <PlusCircle
                color={color}
                size={36}
                weight={focused ? "fill" : "regular"}
              // style={focused ? { opacity: 1 } : { opacity: 0.6 }}
              />
            )
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault()
              handleBottomSheetOpen()
            }
          })}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <Avatar
                selected={focused}
                source={{ uri: "https://github.com/ias4g.png" }}
              />
            ),
          }}
        />
      </Tabs>

      <NewAlarm onClose={handleBottomSheetClose} ref={bottomSheetRef} />
    </View>
  )
}