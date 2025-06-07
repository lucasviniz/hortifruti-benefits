import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { usePoints } from '@/contexts/points-context';
import { useFeedbackScreen } from '@/hooks/feedback-screen';
import { benefits } from '@/data/benefits';
import { useBenefits } from '@/contexts/benefits-context';
import { useHistory } from '@/contexts/history-context';

export default function BenefitDetail() {
  const { id } = useLocalSearchParams();
  const { points, redeemPoints } = usePoints();
  const { showSuccess, showError } = useFeedbackScreen();
  const [isLoading, setIsLoading] = useState(false);

  const benefit = benefits.find((b) => b.id === id);
  const { redeemBenefitById } = useBenefits();
  const { addHistory } = useHistory();


  if (!benefit) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Benefício não encontrado.</Text>
      </SafeAreaView>
    );
  }

  const handleRedeem = async () => {
    if (points < benefit.points) {
      return showError({
        title: 'Pontos insuficientes',
        message: `Você precisa de ${benefit.points} pontos para resgatar esse benefício.`,
        redirect: '/dashboard',
      });
    }
  
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      redeemPoints(benefit.points);
      redeemBenefitById(benefit.id); // <- Remover da lista
      addHistory({
        title: benefit.title,
        points: benefit.points,
        icon: 'gift',
        type: 'debit',
      });
      
      showSuccess({
        title: 'Benefício resgatado!',
        message: `Você usou ${benefit.points} pontos.`,
        redirect: '/dashboard',
      });
    } catch (error) {
      showError({
        title: 'Erro ao resgatar',
        message: 'Tente novamente mais tarde.',
        redirect: '/dashboard',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1, padding: 24, justifyContent: 'space-between' }}>
        <View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#D1FAE5',
              borderRadius: 999,
              padding: 24,
              alignSelf: 'center',
              marginBottom: 24,
            }}
          >
            <benefit.icon size={48} color="#059669" />
          </View>

          <Text style={{ fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 12 }}>
            {benefit.title}
          </Text>

          <Text style={{ fontSize: 14, color: '#6B7280', textAlign: 'center', marginBottom: 24 }}>
            {benefit.description}
          </Text>

          <Text style={{ fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#10B981' }}>
            {benefit.points} pontos
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleRedeem}
          disabled={isLoading}
          style={{
            backgroundColor: '#10B981',
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 12,
            opacity: isLoading ? 0.6 : 1,
          }}
        >
          {isLoading ? (
            <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 16 }}>Processando...</Text>
          ) : (
            <>
              <Feather name="check-circle" size={20} color="#FFFFFF" />
              <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 16 }}>Resgatar benefício</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
