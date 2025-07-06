import { styles } from '@/styles/profile/Profile.styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Stats = () => {
  return (
    <View style={styles.statsWrapper}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.socialIcons}>
            <Ionicons name="logo-instagram" size={30} color="#000" style={{ marginRight:10}} />
  <Ionicons name="logo-twitter" size={30} color="#1DA1F2" style={{ marginRight:10}} />
          <Ionicons name="logo-facebook" size={30} color="#1877F2" style={{ marginRight: 10 }} />
          <Ionicons name="logo-linkedin" size={30} color="#0077B5" />
        {/*   <InstagramIcon style={{ marginRight: 8 }} />
          <XIcon style={{ marginRight: 8 }} />
          <FacebookIcon style={{ marginRight: 8 }} />
          <LinkedinIcon /> */}
        </View>

        <View style={styles.profileViews}>
          <Ionicons name="stats-chart" size={20} color="#0F0F0F" style={{ marginRight: 5 }} />
          <Text style={styles.profileViewText}>
            <Text style={{ fontWeight: '600' }}>238</Text> profile Views
          </Text>
        </View>
      </View>

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.statBox}>
          <Text style={styles.statText}>6 Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statBox}>
          <Text style={styles.statText}>8 Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stats;
