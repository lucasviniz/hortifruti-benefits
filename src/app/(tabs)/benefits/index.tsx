import { useBenefits } from '@/contexts/benefits-context';
import BenefitCard from '@/components/benefit-card';
import DashboardHeader from '@/components/dashboard-header';
import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function BenefitsScreen() {
  const { availableBenefits } = useBenefits();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <DashboardHeader />

        <View style={{ paddingHorizontal: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 16 }}>
            Benefícios exclusivos do Hortifruti
          </Text>

          {availableBenefits.length === 0 ? (
            <Text style={{ color: '#6B7280', textAlign: 'center', marginTop: 32 }}>
              Você já resgatou todos os benefícios disponíveis 🎉
            </Text>
          ) : (
            availableBenefits.map((benefit) => (
              <BenefitCard
                key={benefit.id}
                icon={benefit.icon}
                title={benefit.title}
                points={benefit.points}
                onPress={() => router.push(`/benefits/${benefit.id}`)}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
