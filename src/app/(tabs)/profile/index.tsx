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
import { useAuth } from '@/contexts/auth-context'; // 👈 contexto de autenticação

const handleLogout = () => {
  Alert.alert(
    'Deseja sair?',
    'Você será redirecionado para a tela de login.',
    [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: () => {
          // Aqui você pode limpar os dados do usuário do contexto
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
  const { user } = useAuth(); // 👈 pega o nome e email

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

          <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827' }}>
            {user?.name ?? 'Nome do usuário'}
          </Text>
          <Text style={{ fontSize: 14, color: '#6B7280' }}>
            {user?.email ?? 'email@exemplo.com'}
          </Text>
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
