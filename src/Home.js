import React from 'react'
import { View, Text, StyleSheet } from "react-native"
function Home() {
    return (
        <View style={styles.container} >
            <Text>
                {"Home component"}
            </Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 16
    }
})