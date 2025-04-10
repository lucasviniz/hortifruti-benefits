import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 30,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600],
        marginBottom: 5
    },
    subtitle:{
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginBottom: 30
    },
    containerSocialLogin: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }
})