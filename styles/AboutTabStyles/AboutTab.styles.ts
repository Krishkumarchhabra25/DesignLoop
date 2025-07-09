import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    backgroundColor: '#fff',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },

  sectionNote: {
    color: '#555',
    fontSize: 12,
    marginTop: 2,
  },

  sectionWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
  },

  sectionWrapperBottom: {
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 32,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  summaryContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  summaryText: {
    marginTop: 6,
    color: '#444',
    fontSize: 13,
    lineHeight: 20,
  },

  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 8,
    rowGap: 8,
    marginTop: 12,
  },

  tagChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
  },

  tagText: {
    fontSize: 13,
    color: '#333',
  },

  timelineItem: {
    flexDirection: 'row',
    marginLeft: 16,
    marginTop: 16,
  },

  timelineMarker: {
    alignItems: 'center',
    marginRight: 12,
  },

timelineDot: {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: '#4f46e5',
},

timelineLine: {
  width: 1,
  flex: 1,
  backgroundColor: '#4f46e5',
  marginTop: 3, 
},

  timelineContent: {
    flex: 1,
  },

  timelineTitle: {
    fontWeight: '600',
    fontSize: 14,
  },

  timelineSubtitle: {
    fontSize: 13,
    color: '#444',
  },

  timelineDuration: {
    fontSize: 12,
    color: '#777',
  },

  timelineNote: {
    fontSize: 12,
    color: '#555',
  },

  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: '#eef2ff',
    borderRadius: 12,
    marginTop: 4,
  },

  badgeText: {
    fontSize: 11,
    color: '#4f46e5',
  },
});
