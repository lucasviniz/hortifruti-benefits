import React from 'react';
import { View, Text, Image, ViewStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"

type Props = TouchableOpacityProps & {
  icon: React.ComponentType<TablerIconProps> // require(...)
  title: string;
  points: number;
  style?: ViewStyle;
};

export default function BenefitCard({ icon: Icon, title, points, style, ...rest }: Props) {
  return (
    <TouchableOpacity  style={[styles.container, style]} activeOpacity={0.8} {...rest}>
      <View style={styles.iconWrapper}>
        <Icon size={24} color="green"/>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.points}>{points} points</Text>
      </View>
    </TouchableOpacity >
  );
};
