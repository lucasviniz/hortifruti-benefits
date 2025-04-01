import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { useFeedbackScreen } from '@/hooks/feedback-screen';
import { Loading } from '@/components/loading';
import { Button } from '@/components/button';
import { IconCheck } from '@tabler/icons-react-native';

export default function ReceiptDetailsScreen() {
  const { receipt, amount, date } = useLocalSearchParams();
  const { showSuccess, showError } = useFeedbackScreen();
  const [isLoading, setIsLoading] = useState(false);

  const [opinion, setOpinion] = useState('');
  

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      showSuccess({
        title: 'Recibo registrado',
        message: 'Seus pontos foram adicionados com sucesso.',
        redirect: '/dashboard',
      });
    } catch (error) {
      showError({
        title: 'Erro ao resgatar benefício',
        message: 'Tente novamente mais tarde.',
        redirect: '/dashboard',
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 24 }}>
      <Text style={styles.title}>Receipt Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Receipt Number</Text>
        <Text style={styles.value}>{receipt ?? '123456'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total Spent</Text>
        <Text style={styles.value}>R$ {amount ?? '48.00'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Purchase Date</Text>
        <Text style={styles.value}>{date ?? '2025-03-30'}</Text>
      </View>

      <Text style={[styles.label, { marginTop: 24 }]}>Your Opinion (Optional)</Text>
      <TextInput
        placeholder="Share your experience"
        placeholderTextColor="#9CA3AF"
        multiline
        numberOfLines={4}
        style={styles.input}
        value={opinion}
        onChangeText={setOpinion}
      />

      <Button isLoading={isLoading} onPress={handleConfirm}>
        <Button.Icon icon={IconCheck} />
        <Button.Title>Confirm and Redeem</Button.Title>
      </Button>

    </SafeAreaView>
  );
}
