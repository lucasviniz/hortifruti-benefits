import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useFeedbackScreen } from '@/hooks/feedback-screen';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { IconLock, IconShieldCheck } from '@tabler/icons-react-native';
import { router } from 'expo-router';

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function ChangePasswordScreen() {
  const { showSuccess, showError } = useFeedbackScreen();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const newPasswordValue = watch('newPassword');

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);

      await new Promise(resolve => setTimeout(resolve, 1000));

      showSuccess({
        title: 'Senha atualizada',
        message: 'Sua nova senha foi salva com sucesso.',
        redirect: '/profile',
      });
    } catch (error) {
      showError({
        title: 'Erro ao alterar senha',
        message: 'Tente novamente mais tarde.',
        redirect: '/profile',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1, padding: 24, gap: 32 }}>
        <View>
          <Text style={{ fontSize: 22, fontWeight: '700', color: '#1F2937' }}>Alterar Senha</Text>
          <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>
            Atualize sua senha de acesso
          </Text>
        </View>

        <View style={{ gap: 16 }}>
          <Controller
            control={control}
            name="currentPassword"
            rules={{ required: 'Senha atual obrigatória' }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha atual"
                secureTextEntry
                icon={IconLock}
                value={value}
                onChangeText={onChange}
                errorMessage={errors.currentPassword?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="newPassword"
            rules={{ required: 'Nova senha obrigatória', minLength: { value: 6, message: 'Mínimo 6 caracteres' } }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nova senha"
                secureTextEntry
                icon={IconLock}
                value={value}
                onChangeText={onChange}
                errorMessage={errors.newPassword?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: 'Confirme a nova senha',
              validate: value => value === newPasswordValue || 'As senhas não coincidem',
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirmar nova senha"
                secureTextEntry
                icon={IconLock}
                value={value}
                onChangeText={onChange}
                errorMessage={errors.confirmPassword?.message}
              />
            )}
          />
        </View>

        <View style={{ marginTop: 'auto' }}>
          <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
            <Button.Icon icon={IconShieldCheck} />
            <Button.Title>Salvar nova senha</Button.Title>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
