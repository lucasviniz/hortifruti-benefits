import { Text, View } from "react-native";
import { s } from "./styles";
import { Input } from "@/components/input";
import DividerWithText from "../divider";
import { Button } from "../button";
import { router } from "expo-router";
import SocialButton from "../button/social-button";
import { useFeedbackScreen } from "@/hooks/feedback-screen";
import { useState } from "react";

export function LoginForm() {

    const { showError, showSuccess } = useFeedbackScreen();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
          return showError({
            title: 'Campos obrigatórios',
            message: 'Preencha o e-mail e a senha para continuar.',
            redirect: '/login'
          });
        }
      
        try {
          setIsLoading(true);
          
          // Simula autenticação
          await new Promise(resolve => setTimeout(resolve, 1000));
            
          router.replace("/dashboard")
        } catch (error) {
          showError({
            title: 'Erro ao logar',
            message: 'Verifique suas credenciais e tente novamente.',
            redirect: '/login'
          });
        } finally {
          setIsLoading(false);
        }
      };
      

    return (
        <View style={s.container}>
            <Text style={s.title}>Login</Text>
            <Text style={s.subtitle}>Bem vindo de volta ao James Hortifrut</Text>

            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <Input
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            
            <View style={{width: "100%"}}>
                <Button isLoading={isLoading} onPress={handleLogin}>
                    <Button.Title>Login</Button.Title>
                </Button>
            </View>

            <View style={{ marginTop: 24, alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: '#6B7280' }}>
                    Não tem uma conta?{' '}
                    <Text
                    style={{ color: '#10B981', fontWeight: '600' }}
                    onPress={() => router.push('/register')}
                    >
                    Cadastre-se
                    </Text>
                </Text>
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