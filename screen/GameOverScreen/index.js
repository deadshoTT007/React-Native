import React from 'react'
import {View, Text, StyleSheet, Button, Image } from 'react-native'

const GameOverScreen = ({rounds,startNewGameHandler, userChoice}) => {
    console.log(userChoice,rounds,"gameOver")
    return (
        <View style={styles.screen}>
            <Text>The Game is over !</Text>
            <View style={styles.imageContainer}>
            {/* <Image resizeMode="cover" style={styles.image} source={require('../../assets/success.jpeg')}/> */}
            <Image resizeMode="cover" style={styles.image} source={{uri:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSn63oO8RDTd1OJFr_Dmxk1bqei-LDIPE53BxUzXVb99C9CFyA5lCjkmxoFRV0V5uaG"}}/>
            </View>
             <Text>The number of guess u have taken is {rounds} !</Text>
            <Text>The guess number was {userChoice}</Text> 
            <View style={styles.newGameButton}><Button onPress={()=>startNewGameHandler()} title="NEW GAME"/></View>
        </View>
    )
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
},
newGameButton:{
    marginTop:20
},
imageContainer:{
    width:300,
    height:300,
    borderRadius:150,
    overflow:"hidden"
},
image:{
    width:"100%",
    height:"100%"
}
})

export default GameOverScreen
