import { styles } from '@/styles/profile/Profile.styles';
import { ProfileStackParamList } from '@/types/navigation';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


type ProfileScreenNavigationProp = NativeStackNavigationProp<
  ProfileStackParamList,
  'ProfileMain'
>;


const Stats = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();


  return (
    <View style={styles.statsWrapper}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.socialIcons}>
            <Ionicons name="logo-instagram" size={30} color="#000" style={{ marginRight:10}} />
  <Ionicons name="logo-twitter" size={30} color="#1DA1F2" style={{ marginRight:10}} />
          <Ionicons name="logo-facebook" size={30} color="#1877F2" style={{ marginRight: 10 }} />
          <Ionicons name="logo-linkedin" size={30} color="#0077B5" />
        </View>

        <View style={styles.profileViews}>
          <Ionicons name="stats-chart" size={20} color="#0F0F0F" style={{ marginRight: 5 }} />
<Text style={styles.profileViewText}>
  <Text style={{ fontWeight: '600' }}>238</Text>
  <Text> profile Views</Text>
</Text>


        </View>
      </View>

      {/* Bottom Row */}
     <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.statBox}
          onPress={() => navigation.navigate('FollowersFollowing', { initialTab: 'Followers' })}
        >
          <Text style={styles.statText}>6 Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.statBox}
          onPress={() => navigation.navigate('FollowersFollowing', { initialTab: 'Following' })}
        >
          <Text style={styles.statText}>8 Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stats;
