import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { styles } from './styles';
import { Button } from '@/components/button';
import { IconUserCheck } from '@tabler/icons-react-native';
import { useFeedbackScreen } from '@/hooks/feedback-screen';

export default function EditProfileScreen() {
  const { showSuccess, showError } = useFeedbackScreen();
  const [name, setName] = useState('João da Feira');
  const [email, setEmail] = useState('cliente@hortifrut.com');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (!name || !email) {
      return showError({
        title: 'Campos obrigatórios',
        message: 'Preencha nome e email.',
        redirect: '/profile'
      });
    }

    try {
      setIsLoading(true);

      // Simulação de envio
      await new Promise((resolve) => setTimeout(resolve, 1000));

      showSuccess({
        title: 'Perfil atualizado',
        message: 'Suas informações foram salvas com sucesso.',
        redirect: '/profile'
      });
    } catch (error) {
      showError({
        title: 'Erro ao salvar',
        message: 'Tente novamente mais tarde.',
        redirect: '/profile'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1, padding: 24, justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Seu nome"
            placeholderTextColor="#9CA3AF"
          />

          <Text style={[styles.label, { marginTop: 24 }]}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Seu email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
          />
        </View>

        <Button isLoading={isLoading} onPress={handleSave}>
          <Button.Icon icon={IconUserCheck} />
          <Button.Title>Salvar</Button.Title>
        </Button>
      </View>
    </SafeAreaView>
  );
}
