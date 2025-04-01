import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.green.base,
    borderRadius: 999, // bolinha completa
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
    opacity: 1, // para sobrepor com style se desabilitado
  },
  title: {
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  loading: {
    alignSelf: "center",
  },
});
