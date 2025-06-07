import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { router } from 'expo-router';
import { useNotifications } from '@/contexts/notifications-context';

export default function DashboardHeader () {
  const { unreadCount } = useNotifications();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>James Hortifrut</Text>

      <TouchableOpacity onPress={() => router.push('/profile/notifications')} style={{ position: 'relative' }}>
        <Feather name="bell" size={22} color="#111827" />
        
        {unreadCount > 0 && (
          <View
            style={{
              position: 'absolute',
              top: -4,
              right: -6,
              backgroundColor: '#EF4444',
              borderRadius: 999,
              minWidth: 18,
              height: 18,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' }}>
              {unreadCount}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
