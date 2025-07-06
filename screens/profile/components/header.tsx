import { styles } from '@/styles/profile/Profile.styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      {/* ===== Top Bar (Absolute) ===== */}
 <View style={styles.topBar}>
  {/* Left: Username */}
  <Text style={styles.topBarUsername} numberOfLines={1}>
    @Sarthak Ranjan
  </Text>

  {/* Right: Icons */}
  <View style={styles.iconGroup}>
    <TouchableOpacity style={styles.iconBtn}>
      <Ionicons name="share-social-outline" size={24} color="#000" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconBtn}>
      <Ionicons name="add-circle-outline" size={24} color="#000" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconBtn}>
      <Ionicons name="ellipsis-vertical" size={24} color="#000" />
    </TouchableOpacity>
  </View>
</View>

{/* ✅ Profile Info Section */}
<View style={styles.profileRowWrapper}>
  <View style={styles.profileRow}>
    <Image
      source={require('@/assets/images/defaultprofile.png')}
      style={styles.avatar}
    />
    <View style={{ marginLeft: 10 }}>
      <Text style={styles.name}>Sarthak Ranjan Hota</Text>
      <Text style={styles.subtitle}>UI/UX Designer | CEO Of Design Spark Studio</Text>
    </View>
  </View>

  {/* 🖉 Edit icon */}
  <TouchableOpacity style={styles.editBtn}>
    <Ionicons name="create-outline" size={20} color="#000" />
  </TouchableOpacity>
</View>

      <View style={styles.placeContainer}>
        <View style={styles.placeItem}>
          <Ionicons name="location-outline" size={18} color="#777" />
          <Text style={styles.placeText}>Karangamal, Nuapada</Text>
        </View>
        <View style={styles.placeItem}>
          <Ionicons name="calendar-outline" size={18} color="#777" />
          <Text style={styles.placeText}>Joined Jun 2023</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
