import BottomTab from "@/components/bottom-tab";
import QuickActionButton from "@/components/button/quick-action";
import DashboardHeader from "@/components/dashboard-header";
import PointsCard from "@/components/points-card";
import { IconCubeSend, IconQrcode, IconReceipt } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Dashboard() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
          <DashboardHeader />
          <PointsCard />

          <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 32 }}>
            <QuickActionButton icon={IconQrcode} label="Registrar recibo" onPress={() => router.push('/receipt/register')} />
            <QuickActionButton icon={IconReceipt} label="Scanear QR Code" onPress={() => router.push("/receipt/scanner")} />
          </View>

          {/* Seção de Novidades */}
          <View style={{ marginBottom: 16, paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 12 }}>
              Novidades da semana
            </Text>

            <View style={{ backgroundColor: '#F9FAFB', padding: 16, borderRadius: 16, marginBottom: 12 }}>
              <Text style={{ fontSize: 15, fontWeight: '600', color: '#111827' }}>🍓 Nova safra de morangos frescos chegou!</Text>
              <Text style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>
                Morangos direto do produtor com preço especial essa semana. Aproveite!
              </Text>
            </View>

            <View style={{ backgroundColor: '#F9FAFB', padding: 16, borderRadius: 16, marginBottom: 12 }}>
              <Text style={{ fontSize: 15, fontWeight: '600', color: '#111827' }}>🥬 Feira Verde no sábado</Text>
              <Text style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>
                Evento com hortaliças orgânicas e degustações na loja central. Das 08h às 13h.
              </Text>
            </View>

            <View style={{ backgroundColor: '#F9FAFB', padding: 16, borderRadius: 16 }}>
              <Text style={{ fontSize: 15, fontWeight: '600', color: '#111827' }}>🍊 Receita da Semana: Suco Detox</Text>
              <Text style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>
                Aprenda a preparar um suco saudável com laranja, cenoura e gengibre. Disponível no nosso blog!
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
