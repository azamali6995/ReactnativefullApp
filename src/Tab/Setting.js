import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

function Setting() {
    const handleNavigate = () => { navigation.navigate('Profile') }

  return (
    <View>
      <TouchableOpacity onPress={() => {handleNavigate() }}>
        <Text>Setting</Text>
      </TouchableOpacity>      
    </View>
  )
}

export default Setting