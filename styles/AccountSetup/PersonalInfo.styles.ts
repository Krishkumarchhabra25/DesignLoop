import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  subheading: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  progressWrapper: {
    marginBottom: 24,
    alignItems: 'center',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressLine: {
    height: 2,
    width: 168,
    backgroundColor: '#CCC',
  },
  progressLineFilled: {
    backgroundColor: '#698CFF',
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#9B84DF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  activeStepText: {
    color: '#fff',
    backgroundColor: '#698CFF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    overflow: 'hidden',
  },
  stepText: {
    color: '#000',
  },
  avatarWrapper: {
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderColor: '#698CFF',
    borderWidth: 2,
    borderRadius: 100,
  },
  placeholderAvatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#888',
  },
  editIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#698CFF',
    padding: 10,
    borderRadius: 20,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 6,
  },
  dropdownInput: {
    height: 52,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#6F8DE7',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    marginBottom: 8,
  },
  dropdownOptions: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6F8DE7',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
  },
  dropdownOption: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  dropdownOptionText: {
    color: '#333',
  },
  dateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#6F8DE7',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginBottom: 12,
  },
  error: {
    color: '#FF4D4D',
    fontSize: 12,
    marginBottom: 8,
  },
  fixedButtonContainer: {
    paddingVertical: 40, // moved button slightly up
    paddingHorizontal: 20,

  },
 

dropdownOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.1)',
  zIndex: 99,
  justifyContent: 'flex-start',
},

dropdownOverlayTouchable: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 999,
},

dropdownFloatingAbsolute: {
  position: 'absolute',
  left: 20,
  right: 20,
  backgroundColor: '#fff',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#6F8DE7',
  overflow: 'hidden',
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 6,
},

dropdownFloating: {
  marginTop: 300, // adjust as needed
  marginHorizontal: 20,
  backgroundColor: '#fff',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#6F8DE7',
  overflow: 'hidden',
  zIndex: 100,
},

button: {
  borderRadius: 50,
  overflow: 'hidden',
},
gradientButton: {
  paddingVertical: 14,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},

});

export default styles;
