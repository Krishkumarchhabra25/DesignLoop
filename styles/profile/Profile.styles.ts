import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  // Wrapper ScrollView
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.04,
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
    paddingHorizontal: width * 0.04,
    zIndex: 10,
  },

  topBarUsername: {
    fontSize: width * 0.042,
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
    fontSize: width * 0.045,
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
    paddingHorizontal: width * 0.04,
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },

  editBtn: {
    padding: 6,
    marginBottom:20
  },

  avatar: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.08,
  },

  name: {
    fontWeight: '600',
    fontSize: width * 0.04,
  },

  subtitle: {
    color: '#777',
    fontSize: width * 0.03,
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
    marginTop: 4,
  },

  placeText: {
    fontSize: width * 0.03,
    color: '#777',
    fontWeight: '400',
    marginLeft: 6,
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
    width: width * 0.45,
    justifyContent: 'center',
  },

  profileViewText: {
    fontSize: width * 0.032,
    color: '#0F0F0F',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  statBox: {
    width: (width - 48) / 2,
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
    fontSize: width * 0.032,
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
    fontSize: width * 0.035,
    textTransform: 'none',
  },

  tabBarLabelFocused: {
    fontWeight: '600',
  },

  tabBarLabelUnfocused: {
    fontWeight: '400',
  },

  tabContent: {
    paddingVertical: 16,
    paddingHorizontal: 4,
  },

  section: {
    paddingHorizontal: 20,
  paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
  color: '#000',
  fontWeight: '700',
  fontSize: 16,
  marginBottom: 12,

  },

});
