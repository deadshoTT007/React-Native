import React, { useState, useRef, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Alert, ScrollView, FlatList } from 'react-native'
import NumberContainer from '../StartingScreen/NumberContainer'
import Card from '../../Components/Header/Card'
import CustomButton from '../../Components/CustomButton'
import { colors } from '../../utils/colors'

const generateRandownNumber = (min,max, exclude) => {
 min=Math.ceil(min)
 max=Math.floor(max)
const randomNumber=Math.floor(Math.random()*(max-min))+min;
// if(randomNumber===exclude){
//    return generateRandownNumber(min,max,exclude)
// }
// else{
//     return randomNumber
// }
return randomNumber
}

const GameScreen = (props) => {
    
    const { userChoice,onGameOver,roundsHandler } = props;
    const initialGuess = generateRandownNumber(1,100,props.userChoice)


    const [currentGuess, setCurrentGuess ] =useState(initialGuess)
    const [pastGuesses, setPastGuesses ] = useState([initialGuess])

    useEffect(()=>{
        if(currentGuess===userChoice){
           onGameOver(1)
        }
    },[currentGuess])

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const renderList = (listLength,itemData)=>{
        console.log(itemData,"item")
        return(
            <View style={styles.list}>
                <Text style={styles.listItem}>*{listLength-itemData.index}</Text>
                <Text style={styles.listItem}>{itemData.item}</Text>
            </View>
        )
    }

const nextGuessHandler = (direction) => {

    
    if((direction==="lower" && currentGuess<userChoice )||(direction==="greater" && currentGuess>userChoice)){
        Alert.alert("Dont't lie","It's not a valid option",  [{ text: "Okay", style: "destructive"}])
        return;
    }
    if(direction==="lower"){
        currentHigh.current=currentGuess-1
    }
    else{
        currentLow.current=currentGuess+1
    }

    const nextNumber = generateRandownNumber(currentLow.current,currentHigh.current,userChoice)
    setCurrentGuess(nextNumber)
    setPastGuesses(pre=>[nextNumber,...pre])
    roundsHandler()
}
console.log(currentGuess,userChoice,currentLow.current,currentHigh.current,"guess")

    return (
        <View style={styles.gameScreen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <CustomButton title="LOWER" onPress={()=>nextGuessHandler('lower')} />
                <CustomButton title="GREATER" onPress={()=>nextGuessHandler('greater')} />
            </Card>
            <View style={styles.scrollList}>
            <FlatList keyExtractor={item=>item} data={pastGuesses} renderItem={renderList.bind(this,pastGuesses.length)}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    gameScreen:{
        flex:1,
        alignItems:"center",
        paddingTop:20
        // justifyContent:"center"
        // backgroundColor:"red"
    },
    buttonContainer:{
        width:"60%",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20,
        paddingTop:20
    },
    // listContainer:{
    //     // backgroundColor:"blue",
    //     marginTop:20,
    //     width:"80%",
    //     // alignItems:"flex-start"
    // },
    list:{
        backgroundColor:colors.primary,
        padding:10,
        color:"#fff",
        borderRadius:8,
        marginVertical:10,
        flexDirection:"row",
        justifyContent:"space-between",
        // flex:1,
    },
    listItem:{
        color:"#fff"
    },
    scrollList:{
        width:"80%",
        flex:1,
    }
})

export default GameScreen
