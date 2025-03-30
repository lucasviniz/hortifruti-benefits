import { Image, Text, View } from "react-native";
import { s } from "./styles";

export function Welcome() {
    return (
        <View>
          <View style={s.logoContainer}>
            <Image source={require("@/assets/logo.png")} style={s.logo}/> 
          </View>
          <Text style={s.title}>Bem vindo ao James Hortifrut!</Text>

          <Text style={s.subtitle}>
            Obtenha pontos de vantagem para usar em produtos selecionados.
          </Text>
        </View>
    )
}