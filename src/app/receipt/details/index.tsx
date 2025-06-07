import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { useFeedbackScreen } from '@/hooks/feedback-screen';
import { Loading } from '@/components/loading';
import { Button } from '@/components/button';
import { IconCheck } from '@tabler/icons-react-native';
import { usePoints } from '@/contexts/points-context';
import { useHistory } from '@/contexts/history-context';

export default function ReceiptDetailsScreen() {
  const { showSuccess, showError } = useFeedbackScreen();
  const [isLoading, setIsLoading] = useState(false);
  const params = useLocalSearchParams();
  const receipt = params.receipt as string;
  const feedback = params.feedback as string;
  const [isFetching, setIsFetching] = useState(false);
  const initialAmount = params.amount as string | undefined;
  const initialDate = params.date as string | undefined;
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  
  const [opinion, setOpinion] = useState('');
  const { addPoints } = usePoints();
  const { addHistory } = useHistory();


  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const POINTS_REWARD = 250;

      addPoints(POINTS_REWARD);
      addHistory({
        title: 'Recibo Registrado',
        points: POINTS_REWARD,
        icon: 'file-text',
        type: 'credit',
      });

      showSuccess({
        title: 'Recibo registrado',
        message: `Você ganhou ${POINTS_REWARD} pontos.`,
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

  const fetchReceiptData = async (code: string) => {
    try {
      const response = await fetch(`https://suaapi.com/receipt/${code}`);
      const data = await response.json();
  
      setAmount(String(data.amount));
      setDate(data.date);
    } catch (error) {
      showError({
        title: 'Erro ao carregar nota',
        message: 'Verifique se o número está correto ou tente novamente.',
        redirect: '/receipt/register',
      });
    }
  };


  useEffect(() => {
    if (!initialAmount || !initialDate) {
      setIsFetching(true);
  
      setTimeout(() => {
        const mockedData = {
          amount: '48.00',
          date: '2025-04-01',
        };
  
        setAmount(mockedData.amount);
        setDate(mockedData.date);
        setIsFetching(false);
      }, 1000);
    }
  }, []);

  if (isFetching) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
      </SafeAreaView>
    );
  }
  

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
        value={feedback ?? opinion}
        onChangeText={setOpinion}
      />

      <Button isLoading={isLoading} onPress={handleConfirm}>
        <Button.Icon icon={IconCheck} />
        <Button.Title>Confirm and Redeem</Button.Title>
      </Button>

    </SafeAreaView>
  );
}
