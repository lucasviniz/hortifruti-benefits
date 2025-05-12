import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useFeedbackScreen } from '@/hooks/feedback-screen';
import { Button } from '@/components/button';
import { IconSend } from '@tabler/icons-react-native';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  receipt: string;
  feedback: string;
};

export default function RegisterReceiptScreen() {
  const router = useRouter();
  const { showError } = useFeedbackScreen();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const feedback = watch('feedback');

  const onSubmit = async ({ receipt, feedback }: FormData) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      router.push({
        pathname: '/receipt/details',
        params: feedback?.trim()
          ? { receipt, feedback }
          : { receipt },
      });
    } catch (error) {
      showError({
        title: 'Erro ao registrar',
        message: 'Tente novamente mais tarde.',
        redirect: '/dashboard',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 24 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '700', marginLeft: 16 }}>Register Receipt</Text>
      </View>

      <View style={{ paddingHorizontal: 24 }}>
        <Text style={styles.label}>Número do recibo</Text>
        <Controller
          control={control}
          name="receipt"
          rules={{ required: 'Este campo é obrigatório' }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                style={[styles.input, errors.receipt && { borderColor: '#EF4444', borderWidth: 1 }]}
                placeholder="Insira o número do recibo"
                placeholderTextColor="#9CA3AF"
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
              />
              {errors.receipt && (
                <Text style={{ color: '#EF4444', marginTop: 4, fontSize: 12 }}>
                  {errors.receipt.message}
                </Text>
              )}
            </>
          )}
        />

        <Text style={[styles.label, { marginTop: 24 }]}>Seu feedback (opcional)</Text>
        <Controller
          control={control}
          name="feedback"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Como foi sua experiência de compra?"
              placeholderTextColor="#9CA3AF"
              value={value}
              onChangeText={onChange}
              multiline
            />
          )}
        />

        <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
          <Button.Icon icon={IconSend} />
          <Button.Title>Enviar recibo</Button.Title>
        </Button>
      </View>
    </SafeAreaView>
  );
}
