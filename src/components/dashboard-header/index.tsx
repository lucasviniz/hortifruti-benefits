import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import PointsCard from '../points-card';

export default function DashboardHeader () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>James Hortifrut</Text>
      <TouchableOpacity>
        <Feather name="bell" size={22} color="#111827" />
      </TouchableOpacity>
    </View>
  );
};
