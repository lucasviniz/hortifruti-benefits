import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB', // cinza claro (tailwind gray-200)
  },
  text: {
    marginHorizontal: 12,
    fontSize: 14,
    color: '#6B7280', // gray-500
    fontWeight: '500',
  },
});
