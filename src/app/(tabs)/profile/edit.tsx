import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { styles } from './styles';

export default function EditProfileScreen() {
  const [name, setName] = useState('João da Feira');
  const [email, setEmail] = useState('cliente@hortifrut.com');

  const handleSave = () => {
    // Aqui você salvaria no backend ou contexto
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1, padding: 24, justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Seu nome"
            placeholderTextColor="#9CA3AF"
          />

          <Text style={[styles.label, { marginTop: 24 }]}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Seu email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Feather name="save" size={20} color="#FFFFFF" />
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}