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
  scrollContent: {
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  subheading: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  progressWrapper: {
    alignItems: 'center',
    marginBottom: 24,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  stepText: {
    color: '#000',
  },
  activeStepText: {
    color: '#fff',
    fontWeight: '600',
  },
  progressLine: {
    height: 2,
    width: 168,
    backgroundColor: '#CCC',
    marginHorizontal: 0,
  },
  progressLineFilled: {
    backgroundColor: '#698CFF',
  },
  prompt: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    fontSize: 14,
  },

  // Updated flow layout for tags
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 4,
  },
  tag: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 12,
    marginRight: 12,
  },
  tagSelected: {
    borderColor: '#698CFF',
    backgroundColor: 'rgba(105, 140, 255, 0.1)',
  },
  tagText: {
    color: '#333',
    fontSize: 13,
  },
  tagTextSelected: {
    color: '#698CFF',
    fontWeight: '600',
  },

  // Footer buttons
buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 20,
  paddingBottom: 40, 
  marginBottom: 10,  
  gap: 20,
},

  backButton: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  finishButtonGradient: {
    flex: 1,
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishButtonInner: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  finishText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
