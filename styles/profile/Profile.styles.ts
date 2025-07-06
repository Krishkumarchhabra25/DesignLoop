import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Wrapper ScrollView
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  // ======= HEADER =======

topBar: {
  position: 'absolute',
  top: 40,
  left: 0,
  right: 0,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  zIndex: 10,
},

topBarUsername: {
  fontSize: 17,
  fontWeight: '600',
  color: '#333',
},
iconGroup: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 15,
},

iconBtn: {
  marginLeft: 8,
},
topBarTitle: {
  position: 'absolute',
  left: 0,
  right: 0,
  textAlign: 'center',
  fontSize: 17,
  fontWeight: '700',
  color: '#000',
  zIndex: -1,
},


  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 4,
    position: 'relative',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  rightSection: {
    padding: 4,
  },

  headerWrapper: {
    marginBottom: 16,
  },

profileRowWrapper: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 94,
  paddingHorizontal: 16,
},

profileRow: {
  flexDirection: 'row',
  alignItems: 'center',
  flexShrink: 1, // makes sure it doesn’t push the icon out
},

editBtn: {
  padding: 6,
},

  avatar: {
    width: 61,
    height: 61,
    borderRadius: 30,
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
  },

  subtitle: {
    color: '#777',
    fontSize: 10,
    marginTop: 2,
  },

  placeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 10,
  },

  placeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginTop:4
  },

  placeText: {
    fontSize: 10,
    color: '#777',
    fontWeight:'400',
    marginLeft:6
  },

  // ======= STATS SECTION =======
  statsWrapper: {
    marginTop: 6,
    marginBottom: 12,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
  },

  socialIcons: {
    flexDirection: 'row',
  },

  profileViews: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: '#C6B8F5',
    borderRadius: 6,
    width: 160,
    justifyContent: 'center',
  },

  profileViewText: {
    fontSize: 12,
    color: '#0F0F0F',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  statBox: {
    width: 162,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#6F8DE7',
    borderColor: '#9B84DF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },

  // ======= TABS & CONTENT =======
  tabBar: {
    backgroundColor: 'white',
  },
  tabBarIndicator: {
    backgroundColor: '#3478f6',
  },
  tabBarTab: {
    width: 'auto',
  },
  tabBarLabel: {
    fontSize: 14,
    textTransform: 'none',
  },
  tabBarLabelFocused: {
    fontWeight: '600',
  },
  tabBarLabelUnfocused: {
    fontWeight: '400',
  },

  // Tab content styles
  tabContent: {
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  section: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000'
  },
});
