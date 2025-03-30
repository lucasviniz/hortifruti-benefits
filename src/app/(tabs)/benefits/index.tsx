import BenefitCard from '@/components/benefit-card';
import DashboardHeader from '@/components/dashboard-header';
import { IconAppleFilled, IconAvocado, IconCarrot, IconCherry, IconCherryFilled, IconGlassFullFilled, IconPackageExport } from '@tabler/icons-react-native';
import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
export default function BenefitsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
          <DashboardHeader />

          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 16 }}>
              Benefícios exclusivos do Hortifruti
            </Text>

            <BenefitCard
              icon={IconAppleFilled}
              title="10% de desconto em frutas frescas"
              points={500}
              onPress={() => router.push('/benefits/1')}
            />
            <BenefitCard
              icon={IconCarrot}
              title="Pacote de vegetais orgânicos grátis"
              points={800}
            />
            <BenefitCard
              icon={IconGlassFullFilled}
              title="Suco Natural Grátis"
              points={300}
            />
            <BenefitCard
              icon={IconPackageExport}
              title="Entrega gratuita em pedidos"
              points={1000}
            />
            <BenefitCard
              icon={IconCherryFilled}
              title="Compre 1 kg de cereja e ganhe 20 grátis"
              points={200}
            />
            <BenefitCard
              icon={IconAvocado}
              title="Pacote de desconto de abacate"
              points={700}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
