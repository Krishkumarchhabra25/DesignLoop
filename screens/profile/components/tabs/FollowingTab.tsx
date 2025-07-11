import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const followers = [
  { id: '1', name: 'Marilyn Workman', desc: 'Designing Experiences, Not Just Screens' },
  { id: '2', name: 'Carter Philips', desc: 'Building Brands with Beautiful Interfaces' },
  { id: '3', name: 'Rayna Calzoni', desc: 'Where Strategy Meets Aesthetic' },
  { id: '4', name: 'Zain Levin', desc: 'Shaping Digital Journeys with Purpose' },
  { id: '5', name: 'Dulce Dorwart', desc: 'Design is My Language, Pixels Are My Voice' },
  { id: '6', name: 'Skylar Dias', desc: 'From Wireframes to Wow Moments' },
  { id: '7', name: 'Omar Workman', desc: 'Leading with Design, Creating with Passion' },
];

const FollowingTab = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: 'https://via.placeholder.com/40' }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 , backgroundColor:"#ffff" }}>
      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={18} color="#888" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={followers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F4F5',
    margin: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  desc: {
    color: '#666',
    fontSize: 13,
    marginTop: 2,
  },
});

export default FollowingTab;
