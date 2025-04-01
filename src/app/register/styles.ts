import { StyleSheet } from 'react-native';
import { colors, spacing, fontFamily, radius } from '@/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
    gap: spacing.md,
  },
  title: {
    fontSize: 22,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray[500],
    marginBottom: spacing.lg,
    fontFamily: fontFamily.regular,
  },
  label: {
    fontSize: 14,
    color: colors.gray[500],
    marginTop: spacing.md,
    marginBottom: 4,
    fontFamily: fontFamily.medium,
  },
  input: {
    backgroundColor: colors.gray[200],
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    color: colors.gray[600],
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
});
