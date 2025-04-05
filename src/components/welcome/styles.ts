import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    logoContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        fontFamily: fontFamily.bold,
        color: colors.gray[600]
    },
    subtitle: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 10
    }
})