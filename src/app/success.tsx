import React, { useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, Animated, Easing } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function SuccessScreen() {
  const router = useRouter();
  const { title, message, redirect, duration } = useLocalSearchParams();
  const progress = useRef(new Animated.Value(0)).current;

  const time = Number(duration) || 3000;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: time,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      router.replace({ pathname: (redirect as any) || '/dashboard' });
    });
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: '#D1FAE5',
          padding: 24,
          borderRadius: 999,
          marginBottom: 24,
        }}
      >
        <Feather name="check" size={32} color="#059669" />
      </View>

      <Text style={{ fontSize: 20, fontWeight: '700', color: '#111827', marginBottom: 6 }}>
        {title ?? 'Success!'}
      </Text>
      <Text style={{ fontSize: 14, color: '#6B7280', textAlign: 'center' }}>
        {message ?? 'Action completed successfully.'}
      </Text>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 4,
          width: '100%',
          backgroundColor: '#E5E7EB',
        }}
      >
        <Animated.View
          style={{
            height: 4,
            width: progressWidth,
            backgroundColor: '#10B981',
          }}
        />
      </View>
    </SafeAreaView>
  );
}
