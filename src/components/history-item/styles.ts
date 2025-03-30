import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    marginBottom: 12,
    gap: 12,
  },
  iconWrapper: {
    backgroundColor: '#D1FAE5',
    padding: 10,
    borderRadius: 999,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  date: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  points: {
    fontSize: 15,
    fontWeight: '700',
  },
});
