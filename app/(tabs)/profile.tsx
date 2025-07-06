import ProfileScreen from '@/screens/profile/ProfileScreen'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const profile = () => {
  return (
  <View style={styles.container}>
    <ProfileScreen />
  </View>
  )
}

export default profile

const styles = StyleSheet.create({
    container: {
    flex: 1,

  },
})