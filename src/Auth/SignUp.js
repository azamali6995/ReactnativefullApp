import React, {useEffect, useState} from 'react'
import {View, Text, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native'


var { height, width } = Dimensions.get('window');

function SignUp({navigation}) {

  const handleLogin=()=>{
    navigation.navigate("DrawerNavigationRoutes")
  }



  return (
    <View style={{ flex: 1, backgroundColor: '#307ecc' }}>

      <View style={{alignItems:"center", marginTop:20}}>
                <Image source={require("../assets/logo.png")} style={{ width: "70%", height: 100, }} />
                <Text>This is Sigup Screen</Text>


                <View style={styles.buttonStyle}>
                    <TouchableOpacity onPress= {()=> handleLogin()}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  buttonStyle: {
      height: 50,
      width: width-80,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "white",
      margin: 20,
      backgroundColor:"#7DE24E",
      alignItems: 'center',
      justifyContent:"center"
  }, 
})
