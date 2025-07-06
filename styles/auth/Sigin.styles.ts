

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
  marginTop: 20,
  gap: 27, // add this for auto vertical spacing
},
childcontent:{
  alignItems:'center',
  marginTop:20,
},
title: {
  fontSize: 31,
  fontWeight: '600',
  fontStyle: 'normal',
  color: '#000',
  textAlign: 'center',
  
},

subtitle: {
  fontSize: 16,
  color: '#252525',
  fontWeight: '400',
  textAlign: 'center',
  fontStyle: 'normal',
  marginTop:9
},

prompt: {
  fontSize: 14,
  color: '#6B6B6B',
  textAlign: 'center',
},

buttonGroup: {
  width: '100%',
  maxWidth: 343,
  gap: 12,
},
  googleButton: {
    backgroundColor: '#698CFF',
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  googleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  appleButton: {
    backgroundColor: '#fff',
    borderColor: '#9B84DF',
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
  },
  appleText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
terms: {
  color: '#000',
  fontSize: 12,
  textAlign: 'center',
  paddingHorizontal: 24,
  lineHeight: 18,
},
  link: {
    textDecorationLine: 'underline',
  },
});

export default styles