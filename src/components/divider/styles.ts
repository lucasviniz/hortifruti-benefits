import { colors, fontFamily } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },

  dividerText: {
    marginHorizontal: 8,
    fontSize: 12,
    color: colors.gray[400],
    fontFamily: fontFamily.medium,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray[300],
  },
});
