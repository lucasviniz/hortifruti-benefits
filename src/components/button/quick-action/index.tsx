import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"

type Props = TouchableOpacityProps & {
  icon: React.ComponentType<TablerIconProps>
  label: string;
};

export default function QuickActionButton({ icon: Icon, label, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
        <Icon size={24} color="#10B981"/>
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};