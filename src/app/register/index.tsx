import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import { useFeedbackScreen } from '@/hooks/feedback-screen';
import { Button } from '@/components/button';
import { IconUserPlus } from '@tabler/icons-react-native';
import { styles } from './styles';

export default function RegisterScreen() {
  const { showSuccess, showError } = useFeedbackScreen();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      return showError({
        title: 'Campos obrigatórios',
        message: 'Preencha todos os campos para continuar.',
        redirect: '/register',
      });
    }

    try {
      setIsLoading(true);

      // Simulando registro no backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      showSuccess({
        title: 'Cadastro concluído',
        message: 'Você pode agora fazer login na sua conta.',
        redirect: '/login',
      });
    } catch (error) {
      showError({
        title: 'Erro ao cadastrar',
        message: 'Tente novamente mais tarde.',
        redirect: '/register',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Criar Conta</Text>
        <Text style={styles.subtitle}>Junte-se ao James Hortifrut</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome completo"
          placeholderTextColor="#9CA3AF"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu email"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Crie uma senha"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button isLoading={isLoading} onPress={handleRegister}>
          <Button.Icon icon={IconUserPlus} />
          <Button.Title>Cadastrar</Button.Title>
        </Button>
      </View>
    </SafeAreaView>
  );
}
