import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

function Details({ navigation }) {
    const handleNavigate = () => { navigation.navigate('MyAlfha') }
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => { handleNavigate() }}>
                <Text>{"Details"}</Text>
            </TouchableOpacity>
            <Text>
                This is Details Screen
            </Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 30,
        // paddingHorizontal: 16
    }
})