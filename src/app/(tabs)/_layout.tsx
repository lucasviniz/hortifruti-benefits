import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
    const insets = useSafeAreaInsets();

  return (
    <Tabs
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons: any = {
          'dashboard/index': 'home',
          'history/index': 'rotate-ccw',
          'benefits/index': 'gift',
          'profile/index': 'user',
        };
        return <Feather name={icons[route.name]} size={22} color={color} />;
      },
      tabBarStyle: {
        paddingBottom: insets.bottom > 0 ? insets.bottom : 12,
        paddingTop: 8,
        height: 60 + (insets.bottom > 0 ? insets.bottom : 12),
      },
      tabBarActiveTintColor: '#10B981',
      tabBarInactiveTintColor: '#9CA3AF',
      tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
      headerShown: false,
    })}
  >
      <Tabs.Screen name="dashboard/index" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="history/index" options={{ title: 'Histórico' }} />
      <Tabs.Screen name="benefits/index" options={{ title: 'Benefícios' }} />
      <Tabs.Screen name="profile/index" options={{ title: 'Perfil' }} />
      <Tabs.Screen name="benefits/[id]"options={{ href: null,}} />
      <Tabs.Screen name="profile/edit"options={{ href: null,}} />
      <Tabs.Screen name="profile/password"options={{ href: null,}} />
      <Tabs.Screen name="profile/notifications"options={{ href: null,}} />
      <Tabs.Screen name="profile/support"options={{ href: null,}} />
    </Tabs>
  );
}
