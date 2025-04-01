import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useFeedbackScreen } from '@/hooks/feedback-screen';

export default function RegisterReceiptScreen() {
  const router = useRouter();
  const [receipt, setReceipt] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { showSuccess, showError } = useFeedbackScreen();

  const handleSubmit = async () => {
    if (!receipt.trim()) {
      return Alert.alert('Campo obrigatório', 'Digite o número do comprovante.');
    }

    try {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      showSuccess({
        title: 'Comprovante registrado',
        message: 'Seus pontos foram adicionados com sucesso.',
        redirect: '/dashboard',
      });
    } catch (error) {
      showError({
        title: 'Erro ao registrar',
        message: 'Tente novamente mais tarde.',
        redirect: '/dashboard',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 24 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '700', marginLeft: 16 }}>Register Receipt</Text>
      </View>

      <View style={{ paddingHorizontal: 24 }}>
        <Text style={styles.label}>Número do recibo</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o número do recibo"
          placeholderTextColor="#9CA3AF"
          value={receipt}
          onChangeText={setReceipt}
          keyboardType="numeric"
        />

        <Text style={[styles.label, { marginTop: 24 }]}>Seu feedback (opcional)</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="Como foi sua experiência de compra?"
          placeholderTextColor="#9CA3AF"
          value={feedback}
          onChangeText={setFeedback}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar recibo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}