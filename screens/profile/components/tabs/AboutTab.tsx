import { styles } from '@/styles/AboutTabStyles/AboutTab.styles';
import { ProfileStackParamList } from '@/types/navigation';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

type ProfileScreenNavProp = NativeStackNavigationProp<ProfileStackParamList, 'EditProfile'>;

const AboutTab = () => {
  const navigation = useNavigation<ProfileScreenNavProp>();

  const summary =
    'Passionate UI/UX designer with a love for building digital experiences that are clean, human-centered, and purpose-driven. I believe in thoughtful design, constant learning, and pushing boundaries through creativity.';

  const tags = ['UI/UX', 'Researcher', 'Founder', 'Freelancer', 'Logo', 'Photographer', 'Graphic designer'];

  const experiences = [
    {
      title: 'Intern UI/UX Designer',
      company: 'Byecom innovation Pvt. Ltd',
      duration: 'Aug 2022 - Feb 2023',
      badge: '1 years and 4 months',
    },
    {
      title: 'Jn. UI/UX Designer',
      company: '',
      duration: 'Feb 2023 - Sep 2023',
    },
     {
      title: 'Full Stack Developer',
      company: 'Pairalabs private limited',
      duration: 'Aug 2022 - Feb 2023',
      badge: '1 years and 4 months',
    },
  ];

  const education = [
    {
      title: 'GIET University, Gunpur',
      degree: 'Master in Computer Application',
      duration: 'Mar 2020 - Mar 2022',
      note: 'Masking a software called',
      badge: '2 Year',
    },
    {
      title: 'RCST, Bhubaneswar',
      degree: 'BSC, Computer Science',
      duration: 'Feb 2018 - Mar 2020',
      badge: '3 year',
    },
    {
      title: 'RCST, Bhubaneswar',
      degree: 'BSC, Computer Science',
      duration: 'Feb 2018 - Mar 2020',
      badge: '3 year',
    },
  ];

 const renderExperienceItem = (
  item: { title: string; company?: string; duration: string; badge?: string },
  isLast: boolean,
  key: number
) => (
  <View key={key} style={styles.timelineItem}>
    <View style={styles.timelineMarker}>
      <View style={styles.timelineDot} />
      {!isLast && <View style={styles.timelineLine} />}
    </View>

    <View style={styles.timelineContent}>
      <Text style={styles.timelineTitle}>{item.title}</Text>
      {item.company ? <Text style={styles.timelineSubtitle}>{item.company}</Text> : null}
      <Text style={styles.timelineDuration}>{item.duration}</Text>
      {item.badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.badge}</Text>
        </View>
      ) : null}
    </View>

    <TouchableOpacity onPress={() => navigation.navigate('EditExperince')}>
      <Ionicons name="create-outline" size={18} color="#4f46e5" />
    </TouchableOpacity>
  </View>
);

const renderEducationItem = (
  item: { title: string; degree?: string; duration: string; note?: string; badge?: string },
  isLast: boolean,
  key: number
) => (
  <View key={key} style={styles.timelineItem}>
    <View style={styles.timelineMarker}>
      <View style={styles.timelineDot} />
      {!isLast && <View style={styles.timelineLine} />}
    </View>

    <View style={styles.timelineContent}>
      <Text style={styles.timelineTitle}>{item.title}</Text>
      {item.degree ? <Text style={styles.timelineSubtitle}>{item.degree}</Text> : null}
      <Text style={styles.timelineDuration}>{item.duration}</Text>
      {item.note ? <Text style={styles.timelineNote}>{item.note}</Text> : null}
      {item.badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.badge}</Text>
        </View>
      ) : null}
    </View>

    <TouchableOpacity onPress={() => navigation.navigate('EditEducation')}>
      <Ionicons name="create-outline" size={18} color="#4f46e5" />
    </TouchableOpacity>
  </View>
);


  return (
   <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
  {/* Summary Section */}
  <View>
    <TouchableOpacity
      style={styles.summaryContainer}
      onPress={() => navigation.navigate('EditProfile')}
    >
      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={styles.summaryText}>{summary}</Text>
    </TouchableOpacity>

    <View style={styles.tagsWrapper}>
      {tags.map((tag, index) => (
        <View key={tag + index} style={styles.tagChip}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  </View>

  {/* Experience Section */}
  <View style={styles.sectionWrapper}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Experience</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddExperince')}>
        <Ionicons name="add-circle-outline" size={20} color="#4f46e5" />
      </TouchableOpacity>
    </View>

    <Text style={styles.sectionNote}>2 Years and 9 months</Text>
    {experiences.map((item, idx) =>
      renderExperienceItem(item, idx === experiences.length - 1, idx)
    )}
  </View>

  {/* Education Section */}
  <View style={styles.sectionWrapperBottom}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Education</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddEducation')}>
        <Ionicons name="add-circle-outline" size={20} color="#4f46e5" />
      </TouchableOpacity>
    </View>

    {education.map((item, idx) =>
      renderEducationItem(item, idx === education.length - 1, idx)
    )}
  </View>
</ScrollView>

  );
};

export default AboutTab;
