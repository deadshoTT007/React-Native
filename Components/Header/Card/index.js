import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={{...styles.card,...props.style}}>
                {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        shadowColor:"#000",
        shadowColor:"#000",
        shadowOffset:{width:10,height:12},
        shadowRadius:6,
        elevation:3,
        borderRadius:8,
        marginTop:20,
        padding:20,
        paddingTop:0,
        shadowOpacity:0.26,
        backgroundColor:"#fff"
    }
}) 

export default Card
