import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  torchBtn: {
    backgroundColor: '#1F2937',
    borderRadius: 999,
    padding: 10,
  },
  qrFrameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrFrame: {
    width: 220,
    height: 220,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 8,
  },
  bottomSection: {
    alignItems: 'center',
    paddingBottom: 36,
  },
  instruction: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 16,
  },
  manualBtn: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 999,
  },
  manualText: {
    color: '#111827',
    fontWeight: '600',
    fontSize: 14,
  },
});
