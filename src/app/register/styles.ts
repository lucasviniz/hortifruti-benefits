import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },

  content: {
    flex: 1,
    padding: 24,
    gap: 5,
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },

  subtitle: {
    fontSize: 14,
    color: colors.gray[400],
    marginBottom: 8,
    fontFamily: fontFamily.regular,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },

  termsText: {
    fontSize: 13,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    flex: 1,
    flexWrap: 'wrap',
  },

  link: {
    color: colors.green.base,
    fontFamily: fontFamily.medium,
  },

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

  socialButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },

  loginText: {
    fontSize: 13,
    textAlign: 'center',
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: colors.gray[400],
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  
  checkboxChecked: {
    backgroundColor: colors.green.base,
    borderColor: colors.green.base,
  },
  
  checkmark: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },  
});
