import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  
  inputWrapperError: {
    borderColor: '#EF4444',
  },
  
  icon: {
    marginRight: 8,
  },
  
  input: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
    fontFamily: 'Rubik_400Regular',
  },
  
  inputError: {
    color: '#EF4444',
  },
  
  errorMessage: {
    fontSize: 12,
    color: '#EF4444',
    marginTop: 4,
    marginLeft: 4,
    fontFamily: 'Rubik_400Regular',
  },
  toggleButton: {
    marginLeft: 8,
  },
  
  
});
