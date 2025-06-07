import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { useFeedbackScreen } from '@/hooks/feedback-screen';
import { IconMail, IconMailCheck } from '@tabler/icons-react-native';
import { router } from 'expo-router';

type FormData = {
  email: string;
};

export default function ForgotPasswordScreen() {
  const { showSuccess, showError } = useFeedbackScreen();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async ({ email }: FormData) => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      showSuccess({
        title: 'Link enviado',
        message: 'Verifique sua caixa de entrada para redefinir sua senha.',
        redirect: '/login',
      });
    } catch {
      showError({
        title: 'Erro ao enviar',
        message: 'Tente novamente mais tarde.',
        redirect: '/forgot-password',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1, padding: 24, gap: 24, justifyContent: 'center' }}>
        <View>
          <Text style={{ fontSize: 22, fontWeight: '700', color: '#1F2937' }}>
            Esqueceu sua senha?
          </Text>
          <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>
            Insira seu email para receber o link de recuperação.
          </Text>
        </View>

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
              placeholder="Seu email"
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
          <Button.Icon icon={IconMailCheck} />
          <Button.Title>Enviar link</Button.Title>
        </Button>
      </View>
    </SafeAreaView>
  );
}
