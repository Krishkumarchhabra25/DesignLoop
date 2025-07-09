import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 5,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    alignItems: 'center', // center input rows
  },
  inputContainer: {
    width: '100%',
    maxWidth: 343, // based on your design
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: '#F9F9F9',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    columnGap: 8, // for consistent spacing between icon and input
  },
  icon: {
    width: 22,
    height: 22,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#737373',
    fontFamily: 'System', // or "Graphik Trial"
    fontWeight: '400',
    paddingVertical: 0,
  },
});
