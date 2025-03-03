import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';

type Params = {
  numero?: string;
  valor?: string;
  data?: string;
};

export default function NotaScreen() {
  const { numero, valor, data } = useGlobalSearchParams<Params>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Detalhes da Nota Fiscal</Text>
      <View style={styles.detail}>
        <Text>Número da Nota: {numero || 'Não informado'}</Text>
        <Text>Valor Total: {valor || 'Não informado'}</Text>
        <Text>Data: {data || 'Não informada'}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detail: {
    marginTop: 20,
  },
});
