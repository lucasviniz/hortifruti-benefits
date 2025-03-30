import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { usePoints } from '@/contexts/points-context';

export default function PointsCard () {
  const { points } = usePoints();


  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.points}>{points.toLocaleString()}</Text>
        <Text style={styles.pointsLabel}>points</Text>
      </View>
    </View>
  );
};