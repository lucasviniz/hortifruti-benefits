import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IconAppleFilled } from '@tabler/icons-react-native';
import { usePoints } from '@/contexts/points-context';
import { useFeedbackScreen } from '@/hooks/feedback-screen';

export default function BenefitDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { redeemPoints } = usePoints();
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccess, showError } = useFeedbackScreen();

  // Dados mockados — no futuro pode vir de um serviço ou contexto
  const benefit = {
    id,
    title: '10% Off Fresh Fruits',
    description: 'Use este benefício para obter 10% de desconto em qualquer fruta fresca da loja.',
    points: 500,
    Icon: IconAppleFilled,
  };

  const handleRedeem = async () => {
      try {
        setIsLoading(true);
    
        // Aqui poderia vir validação com backend
        redeemPoints(benefit.points);
    
        showSuccess({
          title: 'Benefício resgatado!',
          message: `Você resgatou: ${benefit.title}`,
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
                <benefit.Icon size={48} color="#059669" />
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
          activeOpacity={0.8}
          style={{
            backgroundColor: '#10B981',
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 12,
          }}
        >
          <Feather name="check-circle" size={20} color="#FFFFFF" />
          <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 16 }}>Resgatar benefício</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
