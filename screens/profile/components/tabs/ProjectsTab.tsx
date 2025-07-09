import { styles } from '@/styles/ProjectTabStyles/projectTabStyles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const projectData = [
  {
    title: 'Finsecure- Application Case Study',
    subtitle:
      'Welcome to Finesecure, your trusted app for seamless money transfers, bill payments, and recharges. Our streamlined and intuitive platform empowers you to manage your finances with ease.',
    duration: 'Mar 2020 - Mar 2022',
    image: require('@/assets/images/finsecure.png'),
  },
  {
    title: 'AnimalAlly - Empowering animal welfare, together',
    subtitle:
      'Your go-to app for connecting lost pets with their owners, adopting furry companions in need, and rescuing animals in distress. Find your perfect match and make a difference today!',
    duration: '23 Aug 2023 - Present',
    image: require('@/assets/images/appp.jpg'),
  },
];

const ProjectsTab = () => {
  return (
<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Projects</Text>
          <Text style={styles.headerSubtitle}>{projectData.length} Projects</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#4F46E5" />
        </TouchableOpacity>
      </View>

      {/* Timeline */}
      <View style={styles.timelineContainer}>
        <View style={styles.verticalLine} />
        {projectData.map((project, index) => (
          <View key={index} style={styles.timelineItem}>
            <View style={styles.dot} />
            <View style={styles.card}>
              <Image source={project.image} style={styles.banner} resizeMode="cover" />
              <View style={styles.content}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>{project.title}</Text>
                  <TouchableOpacity>
                    <Ionicons name="create-outline" size={18} color="#6B7280" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.subtitle}>{project.subtitle}</Text>
                <Text style={styles.duration}>{project.duration}</Text>
                <TouchableOpacity style={styles.pdfButton}>
                  <Text style={styles.pdfButtonText}>View Project PDF</Text>
                  <Ionicons name="arrow-forward-circle" size={20} color="#4F46E5" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProjectsTab;