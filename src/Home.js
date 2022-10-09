import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
function Home({ navigation }) {
    const handleNavigate = () => { navigation.navigate('Details') }
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => { handleNavigate() }}>
                <Text>{"Home"}</Text>
            </TouchableOpacity>
            <Text>
                This is Home Screen
            </Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 30,
        // paddingHorizontal: 16
    }
})