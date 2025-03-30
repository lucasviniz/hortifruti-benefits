import { Text, View } from "react-native";
import { s } from "./styles";
import { Input } from "@/components/input";
import DividerWithText from "../divider";
import { Button } from "../button";
import { router } from "expo-router";
import SocialButton from "../button/social-button";

export function LoginForm() {
    return (
        <View style={s.container}>
            <Text style={s.title}>Login</Text>
            <Text style={s.subtitle}>Bem vindo de volta ao James Hortifrut</Text>

            <Input placeholder="Email"/>
            <Input placeholder="Senha"/>
            
            <View style={{width: "100%"}}>
                <Button onPress={() => router.replace("/dashboard")}>
                    <Button.Title>Login</Button.Title>
                </Button>
            </View>
            <DividerWithText />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <SocialButton
                    iconSource={require('@/assets/google.png')}
                    style={{ flex: 1 }}
                    onPress={() => console.log('Google')}
                />
                <SocialButton
                    iconSource={require('@/assets/facebook.png')}
                    style={{ flex: 1 }}
                    onPress={() => console.log('Facebook')}
                />
            </View>

        </View>
    )
}