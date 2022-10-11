import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';

var { height, width } = Dimensions.get('window');

function Login() {
    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()
    const [loading, SetLoading] = useState(false)


    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <Text>Login Form</Text> */}
                <View style={styles.TextInputContainer}>
                    <TextInput
                        value={userEmail}
                        onChange={text => setUserEmail(text)}
                        placeholder="Enter Email"
                        placeholderTextColor="#8b9cb5"
                        keyboardType="email-address"
                        style={styles.inputstyle}    
                    />
                </View>
                <View style={styles.TextInputContainer}>
                    <TextInput
                        value={userPassword}
                        onChange={text => setUserPassword(text)}
                        placeholder="Enter Password"
                        placeholderTextColor="#8b9cb5"
                        secureTextEntry={true}
                        style={styles.inputstyle}    
                    />
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>

        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#307ecc",
        alignItems: "center",
        justifyContent: "center"
    },
    TextInputContainer: {
        height: 50,
        width: width-30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "white",
        margin: 10,
    },
    inputstyle:{
        marginLeft:8    
    },
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