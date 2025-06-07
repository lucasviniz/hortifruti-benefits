import React, { createContext, useContext, useState } from 'react';

export type Notification = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  read: boolean;
};

type NotificationsContextType = {
  notifications: Notification[];
  markAllAsRead: () => void;
  unreadCount: number;
};

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Nova promoção!',
      description: 'Ganhe 20% em pontos nas compras acima de R$50.',
      icon: require('@tabler/icons-react-native').IconTag,
      color: '#10B981',
      read: false,
    },
    {
      id: '2',
      title: 'Aviso de sistema',
      description: 'Estaremos em manutenção no domingo das 2h às 4h.',
      icon: require('@tabler/icons-react-native').IconAlertCircle,
      color: '#F59E0B',
      read: false,
    },
    {
      id: '3',
      title: 'Benefícios disponíveis!',
      description: 'Você possui cupons prontos para resgate.',
      icon: require('@tabler/icons-react-native').IconBell,
      color: '#3B82F6',
      read: false,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationsContext.Provider value={{ notifications, markAllAsRead, unreadCount }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationsProvider');
  }
  return context;
};
