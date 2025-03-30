import DashboardHeader from '@/components/dashboard-header';
import HistoryItem from '@/components/history-item';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function HistoryScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
          <DashboardHeader />

          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 12 }}>
              Seu Histórico
            </Text>

            <HistoryItem
              icon="file-text"
              title="Recibo Registrado"
              date="Mar 29, 2025 - 18:23"
              points="+150"
            />
            <HistoryItem
              icon="gift"
              title="10% de desconto em frutas frescas"
              date="Mar 28, 2025 - 14:05"
              points="-500"
            />
            <HistoryItem
              icon="shopping-bag"
              title="Entrega grátis"
              date="Mar 25, 2025 - 10:10"
              points="-1000"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
