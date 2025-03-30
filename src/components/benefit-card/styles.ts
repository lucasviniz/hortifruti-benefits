import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    gap: 16,
  },
  iconWrapper: {
    backgroundColor: '#D1FAE5',
    borderRadius: 999,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  points: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
});
