import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import SocialButton from '@/components/button/social-button';
import DividerWithText from '@/components/divider';
import { IconUser, IconMail, IconLock } from '@tabler/icons-react-native';
import { useFeedbackScreen } from '@/hooks/feedback-screen';
import { useAuth } from '@/contexts/auth-context'; // IMPORTANTE
import styleRegister from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterScreen() {
  const { showSuccess, showError } = useFeedbackScreen();
  const { register } = useAuth(); // IMPORTANTE
  type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsAccepted: boolean;
  };
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const passwordValue = watch('password');

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);

      await register({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      showSuccess({
        title: 'Cadastro concluído',
        message: 'Você pode agora fazer login na sua conta.',
        redirect: '/login',
      });
    } catch (error: any) {
      showError({
        title: 'Erro ao cadastrar',
        message: error.message || 'Tente novamente mais tarde.',
        redirect: '/register',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styleRegister.container}>
      <View style={styleRegister.content}>
        <Text style={styleRegister.title}>Create Account</Text>
        <Text style={styleRegister.subtitle}>Join Hortifruti Benefits today</Text>

        <View>
          <Controller
            control={control}
            name="name"
            rules={{ required: 'Nome é obrigatório', minLength: { value: 3, message: 'Mínimo de 3 caracteres' } }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Full Name"
                value={value}
                onChangeText={onChange}
                icon={IconUser}
                errorMessage={errors.name?.message}
              />
            )}
          />

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
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                icon={IconMail}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{ required: 'Senha é obrigatória', minLength: { value: 6, message: 'Mínimo de 6 caracteres' } }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                icon={IconLock}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: 'Confirme sua senha',
              validate: value => value === passwordValue || 'As senhas não coincidem',
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirm Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                icon={IconLock}
                errorMessage={errors.confirmPassword?.message}
              />
            )}
          />
        </View>

        <Controller
          control={control}
          name="termsAccepted"
          rules={{ required: 'Você precisa aceitar os termos para continuar.' }}
          render={({ field: { value, onChange } }) => (
            <>
              <TouchableOpacity
                style={styleRegister.checkboxWrapper}
                onPress={() => onChange(!value)}
                activeOpacity={0.8}
              >
                <View style={[styleRegister.checkbox, value && styleRegister.checkboxChecked]}>
                  {value && <Text style={styleRegister.checkmark}>✓</Text>}
                </View>

                <Text style={styleRegister.termsText}>
                  I agree to the{' '}
                  <Text style={styleRegister.link} onPress={() => Linking.openURL('https://example.com/terms')}>
                    Terms of Service
                  </Text>{' '}
                  and{' '}
                  <Text style={styleRegister.link} onPress={() => Linking.openURL('https://example.com/privacy')}>
                    Privacy Policy
                  </Text>
                </Text>
              </TouchableOpacity>

              {errors.termsAccepted && (
                <Text style={{ color: '#EF4444', fontSize: 12, marginTop: 4 }}>
                  {errors.termsAccepted.message}
                </Text>
              )}
            </>
          )}
        />

        <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
          <Button.Title>Create Account</Button.Title>
        </Button>

        <DividerWithText text="Ou registre-se com" />

        <View style={styleRegister.socialButtons}>
          <SocialButton iconSource={require('@/assets/google.png')} style={{ flex: 1 }} onPress={() => console.log('Google')} />
          <SocialButton iconSource={require('@/assets/facebook.png')} style={{ flex: 1 }} onPress={() => console.log('Facebook')} />
        </View>

        <Text style={styleRegister.loginText}>
          Already have an account?{' '}
          <Text style={styleRegister.link} onPress={() => router.push('/login')}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
