import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import {
  IconUser,
  IconLock,
  IconBell,
  IconHeadphones,
  IconLogout,
} from '@tabler/icons-react-native';
import { router } from 'expo-router';

const handleLogout = () => {
    Alert.alert(
      'Deseja sair?',
      'Você será redirecionado para a tela de login.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: () => {
            // Aqui você poderia limpar tokens, etc.
            router.replace('/login');
          },
        },
      ],
      { cancelable: true }
    );
};

const options = [
  { icon: IconUser, label: 'Editar perfil', onPress: () => router.push('/profile/edit') },
  { icon: IconLock, label: 'Alterar senha', onPress: () => router.push('/profile/password') },
  { icon: IconBell, label: 'Notificações', onPress: () => router.push('/profile/notifications') },
  { icon: IconHeadphones, label: 'Suporte', onPress: () => router.push('/profile/support') },
  { icon: IconLogout, label: 'Sair', onPress: handleLogout },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 100, alignItems: 'center' }}>
        <View style={{ alignItems: 'center', marginBottom: 32 }}>
          <View
            style={{
              backgroundColor: '#D1FAE5',
              padding: 20,
              borderRadius: 999,
              marginBottom: 12,
            }}
          >
            <IconUser size={32} color="#059669" />
          </View>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827' }}>João da Feira</Text>
          <Text style={{ fontSize: 14, color: '#6B7280' }}>cliente@hortifrut.com</Text>
        </View>

        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F9FAFB',
              padding: 16,
              borderRadius: 16,
              marginBottom: 12,
              width: '100%',
              gap: 14,
            }}
            activeOpacity={0.8}
            onPress={item.onPress}
          >
            <item.icon size={20} color="#10B981" />
            <Text style={{ fontSize: 15, color: '#111827', fontWeight: '500' }}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
