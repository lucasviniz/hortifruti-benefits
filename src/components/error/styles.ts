import { StyleSheet } from "react-native";
import { colors, radius, spacing, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },
  iconWrapper: {
    backgroundColor: colors.red.light,
    padding: spacing.lg,
    borderRadius: radius.full,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.red.base,
    marginBottom: spacing.sm,
    fontFamily: fontFamily.bold,
  },
  message: {
    fontSize: 14,
    color: colors.gray[500],
    textAlign: "center",
    marginBottom: spacing.lg,
    fontFamily: fontFamily.regular,
  },
  button: {
    backgroundColor: colors.red.base,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.full,
  },
  buttonText: {
    color: colors.gray[100],
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
  },
});
