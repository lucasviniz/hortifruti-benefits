import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

type TabItem = {
  label: string;
  icon: keyof typeof Feather.glyphMap;
  isActive?: boolean;
  onPress?: () => void;
};

type Props = {
  tabs: TabItem[];
};

export default function BottomTab({ tabs }: Props){
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          activeOpacity={0.8}
          onPress={tab.onPress}
        >
          <Feather
            name={tab.icon}
            size={22}
            color={tab.isActive ? '#10B981' : '#9CA3AF'}
          />
          <Text style={[styles.label, tab.isActive && styles.labelActive]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
