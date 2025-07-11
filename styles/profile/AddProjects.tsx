import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:"#ffff"
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginTop: 5,
  },
  dateInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
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
    marginBottom: 6,
  },
  error: {
    color: '#FF4D4D',
    fontSize: 12,
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },
  checkbox: {
  marginRight: 8,
  width: 20,
  height: 20,
},
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  fieldContainer: {
  marginBottom: 6, // Apply consistent vertical spacing
},

  textAreaContainer: {
    marginTop: 0,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    height: 162,
    textAlignVertical: 'top',
    padding: 10,
    fontSize: 14,
  },
  charCount: {
    textAlign: 'right',
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },

  saveButton: {
    marginTop: 30,
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  saveText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  imageUploadBox: {
  borderWidth: 1,
  borderColor: '#4F46E5',
  borderRadius: 8,
  paddingVertical: 50,
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'dashed',
},

imageUploadText: {
  textAlign: 'center',
  color: '#4F46E5',
  marginTop: 8,
  fontSize: 14,
  lineHeight: 20,
},

imageWrapper: {
  position: 'relative',
  borderRadius: 8,
  overflow: 'hidden',
},

imagePreview: {
  width: '100%',
  height: 180,
  borderRadius: 8,
},

imageCloseIcon: {
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: '#fff',
  borderRadius: 12,
},




fileWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#6F8DE7',
  paddingVertical: 12,
  paddingHorizontal: 14,
  borderRadius: 50,
},

fileIconNameWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
},



fileAttachButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '#6F8DE7',
  borderRadius: 50,
  paddingVertical: 12,
},

fileAttachText: {
  color: '#4F46E5',
  marginLeft: 8,
  fontSize: 14,
  fontWeight: '500',
},

fileName: {
  color: '#374151',
  fontSize: 14,
},

});

export default styles;
