import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => {

    const { title } = props;

    return (
      <View style={styles.header}>
          <Text style={styles.headerText}>{props.title}</Text> 
      </View>
    )
}

const styles=StyleSheet.create({
    header:{
        width:"100%",
        height:90,
        paddingTop:36,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f7287b"
    },
    headerText:{
        color:"#fff"
    }
})



export default Header
