import "./global.css"
import { Stack } from "expo-router";
import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold
} from "@expo-google-fonts/rubik"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { colors } from "@/styles/theme";
import { Loading } from "@/components/loading";
import { PointsProvider } from "@/contexts/points-context";


export default function RootLayout() {
  const [fontsLoader] = useFonts({
      Rubik_600SemiBold,
      Rubik_400Regular,
      Rubik_500Medium,
      Rubik_700Bold
  })

  if(!fontsLoader){
    return <Loading/>
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
          <PointsProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.gray[100] }
                }}
            />
          </PointsProvider>
        </GestureHandlerRootView>
  )
}
