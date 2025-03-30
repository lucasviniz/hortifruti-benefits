import BenefitCard from "@/components/benefit-card";
import BottomTab from "@/components/bottom-tab";
import QuickActionButton from "@/components/button/quick-action";
import DashboardHeader from "@/components/dashboard-header";
import PointsCard from "@/components/points-card";
import { IconAppleFilled, IconCubeSend, IconPackageExport, IconQrcode, IconReceipt } from "@tabler/icons-react-native";
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
                    <QuickActionButton icon={IconQrcode} label="Registrar recibo" onPress={() => router.push('/scanner/register')}/>
                    <QuickActionButton icon={IconReceipt} label="Scanear QR Code" onPress={() => router.push("/nota?numero=3478598215&valor=217,83&data=2025-03-02")} />
                </View>

                <View style={{ marginBottom: 16, paddingHorizontal: 24 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 12 }}>
                        Benefícios disponíveis
                    </Text>

                    <BenefitCard
                        icon={IconAppleFilled}
                        title="10% de desconto em frutas frescas"
                        points={500}
                    />
                    <BenefitCard
                        icon={IconPackageExport}
                        title="Entrega grátis"
                        points={1000}
                    />
                </View>

                
            </ScrollView>
                {/* <BottomTab
                        tabs={[
                            { label: 'Home', icon: 'home', isActive: true, onPress: () => {} },
                            { label: 'History', icon: 'rotate-ccw', onPress: () => {} },
                            { label: 'Benefits', icon: 'gift', onPress: () => {} },
                            { label: 'Profile', icon: 'user', onPress: () => {} },
                        ]}
                /> */}
            </View>
        </SafeAreaView>
      );
}