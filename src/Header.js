import React from 'react'
import { View, Text,StyleSheet, ViewPropTypes, Platform, } from "react-native"
import { Header as HeaderRNE } from "react-native-elements";
import { getStatusBarHeight } from 'react-native-status-bar-height';

function Header(props) {
  const { containerStyle, ...rest } = props;

    return (
        <HeaderRNE 
         backgroundColor="gray"
        {...rest}
        containerStyle={[
            // { paddingTop: insets.top },
            styles.header,
            containerStyle,
          ]}
        />
    )
}

const styles = StyleSheet.create({
    header: {
      borderBottomWidth: 0,
      paddingHorizontal: 20,
      height:
        Platform.select({
          android: 56,
          default: 44,
        }) + getStatusBarHeight(),
    //   paddingTop: Platform.OS === "android" ? 5 : getStatusBarHeight(),
    },
  });   

Header.propTypes = {
    containerStyle: ViewPropTypes.style,
  };
  
  Header.defaultProps = {
    containerStyle: {},
  };


export default Header

