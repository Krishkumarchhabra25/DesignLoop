import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  avatarWrapper: {
    alignSelf: 'center',
    marginVertical: 20,
    position: 'relative',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
  },

  placeholderAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 14,
    color: '#555',
  },

  section: {
    marginTop: 24,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },

  BasicInfo: {
    marginTop: 20,
  },

  basictext: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: '#222',
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
    marginBottom: 6,
    marginTop: 10,
  },

  error: {
    color: '#FF4C4C',
    fontSize: 12,
    marginTop: 4,
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
    fontSize: 14,
    color: '#333',
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
    backgroundColor: 'rgba(0,0,0,0.1)',
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
    zIndex: 1000,
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

  saveButton: {
    backgroundColor: '#4D7EFF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },

  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // ✅ NEW — ICON NEXT TO LABEL ABOVE INPUT
  labelWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 6, // use gap if supported, else use margin
  },

  labelIcon: {
    marginRight: 6,
  },

  labelText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },
});
