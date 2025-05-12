import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { IconBell, IconTag, IconAlertCircle } from '@tabler/icons-react-native';

const notifications = [
  {
    id: '1',
    title: 'Nova promoção!',
    description: 'Ganhe 20% em pontos nas compras acima de R$50.',
    icon: IconTag,
    color: '#10B981',
  },
  {
    id: '2',
    title: 'Aviso de sistema',
    description: 'Estaremos em manutenção no domingo das 2h às 4h.',
    icon: IconAlertCircle,
    color: '#F59E0B',
  },
  {
    id: '3',
    title: 'Benefício disponível!',
    description: 'Você possui 2 cupons prontos para resgate.',
    icon: IconBell,
    color: '#3B82F6',
  },
];

export default function NotificationScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 16, color: '#1F2937' }}>
          Notificações
        </Text>

        {notifications.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: '#F9FAFB',
              padding: 16,
              borderRadius: 16,
              marginBottom: 12,
              flexDirection: 'row',
              gap: 16,
              alignItems: 'flex-start',
            }}
          >
            <View
              style={{
                backgroundColor: item.color + '20',
                padding: 10,
                borderRadius: 999,
              }}
            >
              <item.icon size={20} color={item.color} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
