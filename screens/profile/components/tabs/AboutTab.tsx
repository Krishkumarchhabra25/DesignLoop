import { styles } from '@/styles/profile/Profile.styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const AboutTab = () => (
  <View style={[styles.tabContent, { flex: 1, backgroundColor: 'white' }]}>
    <TouchableOpacity style={styles.section}>
      <Text style={styles.sectionTitle}>Add your profile summary</Text>
      <Ionicons name="add-circle-outline" size={20} color="#5b5b5b" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.section}>
      <Text style={styles.sectionTitle}>Experience</Text>
      <Ionicons name="add-circle-outline" size={20} color="#5b5b5b" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.section}>
      <Text style={styles.sectionTitle}>Education</Text>
      <Ionicons name="add-circle-outline" size={20} color="#5b5b5b" />
    </TouchableOpacity>
  </View>
);


export default AboutTab;
