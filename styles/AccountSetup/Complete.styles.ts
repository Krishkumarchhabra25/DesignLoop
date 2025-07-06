import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 70,
    marginTop: 40,
    gap: 50,
  },
  childcontent: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Graphik Trial', // Ensure font is loaded via expo-font
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: undefined, // as per your spec
  },
  subtitle: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Graphik Trial',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
    marginTop: 9,
  },
  buttonGroup: {
    width: '100%',
    maxWidth: 343,
    gap: 12,
  },
  terms: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default styles;
