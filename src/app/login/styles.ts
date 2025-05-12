import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

const styleLogin = StyleSheet.create({
  safearea:{flex: 1,},
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingBottom: 32,
    backgroundColor: colors.gray[100],
  },
  title: {
    fontSize: 30,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginBottom: 24,
    textAlign: "center",
  },
  containerSocialLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default styleLogin;