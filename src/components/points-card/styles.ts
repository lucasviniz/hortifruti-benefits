import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D1FAE5', // verde claro
    borderRadius: 20,
    paddingVertical: 32,
    marginHorizontal: 24,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: '#10B981', // verde escuro
    alignItems: 'center',
    justifyContent: 'center',
  },
  points: {
    fontSize: 28,
    fontWeight: '700',
    color: '#10B981',
  },
  pointsLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginTop: 4,
  },
});
