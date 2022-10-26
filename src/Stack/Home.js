import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
// import HeaderScrren from "../HeaderScrren";
import Header from "../Header";
const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Header
      
        leftComponent=  {<View>
         <Text>
          
         </Text>

        </View>  }
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    // backgroundColor:"red"
  },
});

export default Home;