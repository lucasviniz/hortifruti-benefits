import { SafeAreaView, Text, View } from "react-native";
import styleLogin from "./styles";
import { Input } from "@/components/input";
import DividerWithText from "@/components/divider";
import { Button } from "@/components/button";
import { router } from "expo-router";
import SocialButton from "@/components/button/social-button";
import { useFeedbackScreen } from "@/hooks/feedback-screen";
import { useForm, Controller } from "react-hook-form";
import { IconLock, IconMail } from "@tabler/icons-react-native";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context"; // NOVO

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { showError } = useFeedbackScreen();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);

  const { users } = useAuth(); // NOVO

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);

      const match = users.find(user => user.email === data.email && user.password === data.password);

      if (!match) {
        throw new Error("Email ou senha inválidos.");
      }

      // Se quiser salvar o login, pode usar setUser(match); (por enquanto já está setado no register)
      router.replace("/dashboard");

    } catch (error: any) {
      showError({
        title: 'Erro ao logar',
        message: error.message || 'Verifique suas credenciais e tente novamente.',
        redirect: '/login'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styleLogin.safearea}>
      <View style={styleLogin.container}>
        <Text style={styleLogin.title}>Bem vindo</Text>
        <Text style={styleLogin.subtitle}>Faça login na sua conta</Text>

        <View>
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email inválido',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                icon={IconMail}
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{ required: 'Senha é obrigatória' }}
            render={({ field: { onChange, value } }) => (
              <Input
                icon={IconLock}
                placeholder="Senha"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Text
            style={{
              fontSize: 13,
              color: '#10B981',
              fontWeight: '500',
              textAlign: 'right',
              marginBottom: 16,
            }}
            onPress={() => router.push('/forgot_password')}
          >
            Esqueci minha senha
          </Text>
        </View>

        <View style={{ width: "100%" }}>
          <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
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

        <View style={{ marginTop: 24, alignItems: 'center' }}>
          <Text style={{ fontSize: 14, color: '#6B7280' }}>
            Ainda não tem uma conta?{' '}
            <Text
              style={{ color: '#10B981', fontWeight: '600' }}
              onPress={() => router.push('/register')}
            >
              Cadastre-se
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
