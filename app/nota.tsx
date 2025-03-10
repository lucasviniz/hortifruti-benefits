import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

export default function NotaScreen() {
  const { numero, valor, data } = useGlobalSearchParams();
  const [notaSelecionada, setNotaSelecionada] = useState<number | null>(null);

  const numeroStr = Array.isArray(numero) ? numero[0] : numero;
  const valorStr = Array.isArray(valor) ? valor[0] : valor;
  const dataStr = Array.isArray(data) ? data[0] : data;

  return (
    <SafeAreaView className="flex-1 items-center justify-center p-6 bg-gray-100">
      <ScrollView className="w-full">
        <Text className="text-2xl font-bold mb-6 text-center">Detalhes da Nota Fiscal</Text>

        <View className="w-full space-y-4">
          <View>
            <Text className="text-gray-700 font-semibold">Número da Nota:</Text>
            <TextInput
              className="bg-white border border-gray-300 rounded-md px-4 py-2"
              editable={false}
              value={numeroStr || 'Não informado'}
            />
          </View>

          <View className="mt-4">
            <Text className="text-gray-700 font-semibold">Valor:</Text>
            <TextInput
              className="bg-white border border-gray-300 rounded-md px-4 py-2"
              editable={false}
              value={valorStr || 'Não informado'}
            />
          </View>

          <View className="mt-4">
            <Text className="text-gray-700 font-semibold">Data:</Text>
            <TextInput
              className="bg-white border border-gray-300 rounded-md px-4 py-2"
              editable={false}
              value={dataStr || 'Não informado'}
            />
          </View>

          <View className="mt-8">
            <Text className="text-gray-700 font-semibold text-start mb-4">Avalie de 0 a 10:</Text>
            <View className="flex-row justify-between">
              {Array.from({ length: 11 }, (_, i) => (
                <TouchableOpacity
                  key={i}
                  className="items-center"
                  onPress={() => setNotaSelecionada(i)}
                >
                  <AntDesign
                    name={notaSelecionada === i ? "star" : "staro"}
                    size={32}
                    color={notaSelecionada === i ? "#facc15" : "#9ca3af"}
                  />
                  <Text className="text-xs mt-1">{i}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View className="mt-4">
              <Text className="text-gray-700 font-semibold">Como podemos melhorar?</Text>
              <TextInput
                className="bg-white border border-gray-300 rounded-md px-4 py-10"
              />
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}