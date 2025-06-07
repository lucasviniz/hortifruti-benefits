import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { IconMail, IconUserCheck, IconUser } from '@tabler/icons-react-native';
import { useFeedbackScreen } from '@/hooks/feedback-screen';

type FormData = {
  name: string;
  email: string;
};

export default function EditProfileScreen() {
  const { showSuccess, showError } = useFeedbackScreen();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: 'João da Feira',
      email: 'cliente@hortifrut.com',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      showSuccess({
        title: 'Perfil atualizado',
        message: 'Suas informações foram salvas com sucesso.',
        redirect: '/profile',
      });
    } catch (error) {
      showError({
        title: 'Erro ao salvar',
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
          <Text style={styles.title}>Editar Perfil</Text>
          <Text style={styles.subtitle}>Atualize seus dados pessoais</Text>
        </View>

        <View style={{ gap: 16 }}>
          <Controller
            control={control}
            name="name"
            rules={{ required: 'Nome é obrigatório', minLength: { value: 3, message: 'Mínimo 3 caracteres' } }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Seu nome"
                icon={IconUser}
                value={value}
                onChangeText={onChange}
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
                placeholder="Seu email"
                keyboardType="email-address"
                icon={IconMail}
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />
        </View>

        <View style={{ marginTop: 'auto' }}>
          <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
            <Button.Icon icon={IconUserCheck} />
            <Button.Title>Salvar</Button.Title>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
