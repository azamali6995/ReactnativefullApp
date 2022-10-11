import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

function Profile() {
    const handleNavigate = () => {navigation.navigate('Setting')}

  return (
    <View>
      <TouchableOpacity onPress={() => {handleNavigate()}}>
        <Text>Proile</Text>
      </TouchableOpacity>      
    </View>
  )
}

export default Profile