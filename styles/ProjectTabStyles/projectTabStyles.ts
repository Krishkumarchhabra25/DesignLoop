import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#6B7280',
  },
  addButton: {
    padding: 6,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: '#4F46E5',
    backgroundColor: '#EEF2FF',
  },

  timelineContainer: {
    position: 'relative',
    paddingLeft: 24,
  },
  verticalLine: {
    position: 'absolute',
    top: 4,
    bottom: 0,
    left: 7,
    width: 1.5,
    backgroundColor: '#CBD5E1',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#6366F1',
    borderRadius: 10,
    marginLeft: -5,
    marginBottom: 6,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 28,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    flex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  banner: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 12,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    flex: 1,
    marginRight: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 8,
  },
  duration: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 12,
  },
  pdfButton: {
    backgroundColor: '#EEF2FF',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 30,
    gap: 8,
  },
  pdfButtonText: {
    color: '#4F46E5',
    fontSize: 13,
    fontWeight: '500',
  },
});
