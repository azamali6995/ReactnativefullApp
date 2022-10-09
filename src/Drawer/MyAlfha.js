import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

function MyAlfha({ navigation }) {
    const handleNavigate = () => { navigation.navigate('Home') }
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => { handleNavigate() }}>
                <Text>{"MyAlfha"}</Text>
            </TouchableOpacity>
            <Text>
                This is MyAlfha Screen
            </Text>
        </View>
    )
}

export default MyAlfha

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 30,
        // paddingHorizontal: 16
    }
})