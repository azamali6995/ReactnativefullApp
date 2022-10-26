import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
function SplashScreen({ navigation }) {

    useEffect(() => {
        handleNavigation()
    }, [])
    const handleNavigation = () => {
        setTimeout(() => {
            // navigation.reset("Auth")
            navigation.reset({index: 0,routes: [{ name: 'Auth' }]})

        }, 3000)
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#307ecc' }}>
            <StatusBar backgroundColor="#307ecc" style="dark-content" />
            <View style={{flex:0.25}} />

            <View style={{alignItems:"center", marginTop:20}}>
                <Image source={require("./assets/logo.png")} style={{ width: "70%", height: 100, }} />
                <Text>About React</Text>
            </View>

        </View>
    )
}

export default SplashScreen


