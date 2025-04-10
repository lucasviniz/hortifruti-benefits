import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Linking, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import SocialButton from '@/components/button/social-button';
import { IconUser, IconMail, IconLock, IconPhone } from '@tabler/icons-react-native';
import { useFeedbackScreen } from '@/hooks/feedback-screen';
import { styles } from './styles';
import DividerWithText from '@/components/divider';

export default function RegisterScreen() {
  const { showSuccess, showError } = useFeedbackScreen();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword || !termsAccepted) {
      return showError({
        title: 'Campos obrigatórios',
        message: 'Preencha tudo e aceite os termos para continuar.',
        redirect: '/register',
      });
    }

    if (password !== confirmPassword) {
      return showError({
        title: 'Senhas diferentes',
        message: 'As senhas não coincidem.',
        redirect: '/register',
      });
    }

    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      showSuccess({
        title: 'Cadastro concluído',
        message: 'Você pode agora fazer login na sua conta.',
        redirect: '/login',
      });
    } catch (error) {
      showError({
        title: 'Erro ao cadastrar',
        message: 'Tente novamente mais tarde.',
        redirect: '/register',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join Hortifruti Benefits today</Text>

        <View>
          <Input placeholder="Full Name" value={name} onChangeText={setName} icon={IconUser} />
          <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" icon={IconMail} />
          <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry icon={IconLock} />
          <Input placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry icon={IconLock} />
        </View>

        <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkboxWrapper}
              onPress={() => setTermsAccepted(!termsAccepted)}
              activeOpacity={0.8}
            >
              <View style={[styles.checkbox, termsAccepted && styles.checkboxChecked]}>
                {termsAccepted && <Text style={styles.checkmark}>✓</Text>}
              </View>

              <Text style={styles.termsText}>
                I agree to the{' '}
                <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>
                  Terms of Service
                </Text>{' '}
                and{' '}
                <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacy')}>
                  Privacy Policy
                </Text>
              </Text>
            </TouchableOpacity>
        </View>

        <Button isLoading={isLoading} onPress={handleRegister}>
          <Button.Title>Create Account</Button.Title>
        </Button>

        <DividerWithText text="Ou registre-se com" />

        <View style={styles.socialButtons}>
          <SocialButton iconSource={require('@/assets/google.png')} style={{ flex: 1 }} onPress={() => console.log('Google')} />
          <SocialButton iconSource={require('@/assets/facebook.png')} style={{ flex: 1 }} onPress={() => console.log('Facebook')} />
        </View>

        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={() => router.push('/login')}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
