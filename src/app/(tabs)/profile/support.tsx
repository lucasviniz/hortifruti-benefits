import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  TextInput,
  ScrollView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { IconChevronDown, IconChevronUp, IconSend, IconHelpCircle } from '@tabler/icons-react-native';
import { Button } from '@/components/button';
import { useFeedbackScreen } from '@/hooks/feedback-screen';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const faqList = [
  {
    question: 'Como resgatar um benefício?',
    answer: 'Basta ir até a aba de Benefícios, escolher um e clicar em "Resgatar benefício".',
  },
  {
    question: 'Como cadastrar um recibo?',
    answer: 'Você pode escanear o QR Code ou cadastrar manualmente digitando o número da nota.',
  },
  {
    question: 'Como acumular pontos?',
    answer: 'Faça compras na loja e cadastre seus recibos para acumular pontos automaticamente.',
  },
];

type FormData = {
  message: string;
};

export default function SupportScreen() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const { showSuccess, showError } = useFeedbackScreen();
  const [isLoading, setIsLoading] = useState(false);

  const toggleItem = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const onSubmit = async ({ message }: FormData) => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      reset();

      showSuccess({
        title: 'Mensagem enviada',
        message: 'Entraremos em contato o mais rápido possível.',
        redirect: '/profile',
      });
    } catch {
      showError({
        title: 'Erro ao enviar',
        message: 'Tente novamente mais tarde.',
        redirect: '/profile',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 16, color: '#1F2937' }}>
          Suporte
        </Text>

        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12, color: '#111827' }}>
          Dúvidas frequentes
        </Text>

        {faqList.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <View key={index} style={{ marginBottom: 12 }}>
              <TouchableOpacity
                onPress={() => toggleItem(index)}
                style={{
                  backgroundColor: '#F3F4F6',
                  padding: 16,
                  borderRadius: 12,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#111827', flex: 1 }}>
                  {item.question}
                </Text>
                {isOpen ? (
                  <IconChevronUp size={20} color="#10B981" />
                ) : (
                  <IconChevronDown size={20} color="#10B981" />
                )}
              </TouchableOpacity>
              {isOpen && (
                <View style={{ backgroundColor: '#F9FAFB', padding: 12, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                  <Text style={{ fontSize: 14, color: '#374151' }}>{item.answer}</Text>
                </View>
              )}
            </View>
          );
        })}

        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 32, marginBottom: 12, color: '#111827' }}>
          Ainda com dúvidas?
        </Text>

        <Controller
          control={control}
          name="message"
          rules={{ required: 'Digite sua mensagem' }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                placeholder="Escreva sua dúvida aqui..."
                placeholderTextColor="#9CA3AF"
                style={{
                  backgroundColor: '#F9FAFB',
                  borderRadius: 12,
                  padding: 14,
                  fontSize: 15,
                  color: '#111827',
                  height: 120,
                  textAlignVertical: 'top',
                  borderWidth: errors.message ? 1 : 0,
                  borderColor: errors.message ? '#EF4444' : 'transparent',
                }}
                value={value}
                onChangeText={onChange}
                multiline
              />
              {errors.message && (
                <Text style={{ color: '#EF4444', fontSize: 12, marginTop: 4 }}>
                  {errors.message.message}
                </Text>
              )}
            </>
          )}
        />

        <View style={{ marginTop: 24 }}>
          <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
            <Button.Icon icon={IconSend} />
            <Button.Title>Enviar mensagem</Button.Title>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
