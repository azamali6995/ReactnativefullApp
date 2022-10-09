import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

function Location({ navigation }) {
    const handleNavigate = () => { navigation.navigate('Details') }
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => { handleNavigate() }}>
                <Text>{"Location"}</Text>
            </TouchableOpacity>
            <Text>
                This is Locatin Screen
            </Text>

        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 30,
        // paddingHorizontal: 16
    }
})