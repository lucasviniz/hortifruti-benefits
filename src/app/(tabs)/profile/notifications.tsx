import React from 'react';
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useNotifications } from '@/contexts/notifications-context';

export default function NotificationScreen() {
  const { notifications, markAllAsRead } = useNotifications();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Text style={{ fontSize: 22, fontWeight: '700', color: '#1F2937' }}>
            Notificações
          </Text>

          <TouchableOpacity onPress={markAllAsRead}>
            <Text style={{ color: '#10B981', fontSize: 14, fontWeight: '600' }}>
              Marcar como lidas
            </Text>
          </TouchableOpacity>
        </View>

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
              opacity: item.read ? 0.5 : 1
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
