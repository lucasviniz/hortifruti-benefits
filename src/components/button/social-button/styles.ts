import { colors } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: 56,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: colors.gray[400], // gray-200
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 6,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
