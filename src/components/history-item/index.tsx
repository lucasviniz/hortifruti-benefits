import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

type Props = {
  icon: keyof typeof Feather.glyphMap;
  title: string;
  date: string;
  points: string; // pode ser '+150' ou '-500'
};

const HistoryItem: React.FC<Props> = ({ icon, title, date, points }) => {
  const isPositive = points.startsWith('+');

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Feather name={icon} size={20} color="#10B981" />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={[styles.points, { color: isPositive ? '#10B981' : '#EF4444' }]}>
        {points}
      </Text>
    </View>
  );
};

export default HistoryItem;
