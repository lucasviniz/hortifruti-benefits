import React, { useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, Animated, Easing } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ErrorScreen() {
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
          backgroundColor: '#FEE2E2',
          padding: 24,
          borderRadius: 999,
          marginBottom: 24,
        }}
      >
        <Feather name="x" size={32} color="#DC2626" />
      </View>

      <Text style={{ fontSize: 20, fontWeight: '700', color: '#DC2626', marginBottom: 6 }}>
        {title ?? 'Something went wrong'}
      </Text>
      <Text style={{ fontSize: 14, color: '#6B7280', textAlign: 'center' }}>
        {message ?? 'We couldn’t complete your request.'}
      </Text>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 4,
          width: '100%',
          backgroundColor: '#FEE2E2',
        }}
      >
        <Animated.View
          style={{
            height: 4,
            width: progressWidth,
            backgroundColor: '#DC2626',
          }}
        />
      </View>
    </SafeAreaView>
  );
}
