import { Text, View } from "react-native";
import { s } from "./styles";
import { Step } from "../step";
import { IconCashBanknoteMoveBack, IconCircleDottedLetterP, IconGift } from "@tabler/icons-react-native";

export function Steps(){
    return (
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona</Text>
            <Step
                icon={IconCircleDottedLetterP}
                title="Acumule pontos facilmente"
                description="Registre suas compras rapidamente com QRCode e acumule pontos."
            />
            <Step
                icon={IconCashBanknoteMoveBack}
                title="Converta pontos em Cashback"
                description="Quanto mais você compra, mais você ganha! Troque pontos por descontos e benefícios exclusivos."
            />
            <Step
                icon={IconGift}
                title="Aproveite ofertas exclusivas"
                description="Tenha acesso a descontos e promoções especiais em produtos"
            />
        </View>
    )
}