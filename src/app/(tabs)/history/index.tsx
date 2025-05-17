import DashboardHeader from '@/components/dashboard-header';
import HistoryItem from '@/components/history-item';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useHistory } from '@/contexts/history-context';

export default function HistoryScreen() {
  const { history } = useHistory();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <DashboardHeader />

        <View style={{ paddingHorizontal: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 12 }}>
            Seu Histórico
          </Text>

          {history.length === 0 ? (
            <Text style={{ color: '#6B7280', textAlign: 'center', marginTop: 32 }}>
              Nenhuma atividade recente.
            </Text>
          ) : (
            history.map((item) => (
              <HistoryItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                date={item.date}
                points={`${item.type === 'credit' ? '+' : '-'}${item.points}`}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
