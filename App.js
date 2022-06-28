import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartingScreen from './screen/StartingScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';

export default function App() {

const [userNumber, setUserNumber ] = useState(false)
const [guessRounds, setGuessRounds] = useState(0)
const [rounds, setRounds] = useState(0)

const startGameHandler = (selectedNumber) => {
setUserNumber(selectedNumber)
setGuessRounds(0)
}

const startNewGameHandler = () =>{
  setUserNumber(null)
  setGuessRounds(0)
  setRounds(0)

}

const gameOverHandler=(numberOfRounds)=>{
  setGuessRounds(numberOfRounds)
}

const roundsHandler=()=>{
  setRounds(pre=>pre+1)
}

let content= <StartingScreen startGameHandler={startGameHandler}/>
// let content= <GameOverScreen  startNewGameHandler={startNewGameHandler} userChoice={1} rounds={1}/>

if(userNumber && guessRounds<=0){
  content= <GameScreen roundsHandler={roundsHandler} onGameOver={gameOverHandler} userChoice={userNumber}/>
}else if(guessRounds>0){
content= <GameOverScreen  startNewGameHandler={startNewGameHandler} userChoice={userNumber} rounds={rounds}/>
}

console.log(userNumber,"user")

  return (
    <View style={styles.container}>
      <Header title="Guess a Number"/>
      {/* <StartingScreen/> */}
      {/* <GameScreen/> */}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
