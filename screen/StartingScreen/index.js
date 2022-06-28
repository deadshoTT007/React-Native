import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../../Components/Header/Card'
import { colors } from '../../utils/colors'
import Input from '../../Components/Header/Input/input'
import NumberContainer from './NumberContainer'

const StartingScreen = (props) => {

    const { startGameHandler } = props;

    const [enteredvalue, setEnteredvalue] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const numberInputHandler = (text) => {
        setEnteredvalue(text.replace(/[^0-9]/g, ''))
    }

    const confirmHandler = () => {

        const chooseNumber = parseInt(enteredvalue)
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert('Invalid number !',
                'Number has to be between 1 and 99',
                [{ text: "Okay", style: "destructive", onPress: resetHandler }]
            )
        }
        setConfirm(true)
        setSelectedNumber(chooseNumber)
        setEnteredvalue('')
        Keyboard.dismiss()
    }

    const resetHandler = () => {
        setEnteredvalue('')
        setConfirm(false)
    }

    let confirmOutput;

    if (confirm) {
        confirmOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button onPress={()=>startGameHandler(selectedNumber)} title="Start Game" />
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.startScreen}>
                <Text style={styles.startGameText}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.inputText}>Select a Number</Text>

                    <Input value={enteredvalue} onChangeText={numberInputHandler} style={styles.input} blurOnSubmit autocapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button color={colors.primary} title="Reset" onPress={resetHandler} style={styles.resetButton} /></View>
                        <View style={styles.button}><Button color={colors.secondary} title="Confirm" onPress={confirmHandler} style={styles.confirmButton} /></View>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    startScreen: {
        display: "flex",
        paddingTop: 20,
        alignItems: "center"
        // flex:1,
        // alignItems:"center"
        // width:"100%",
        // backgroundColor:"#000"
    },
    inputContainer: {
        width: "70%",
        alignItems: "center",

    },
    buttonContainer: {
        // backgroundColor:"#000",
        marginTop: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0
    },
    input: {
        width: 50,
        textAlign: "center"
    },
    resetButton: {
        padding: 0,
        margin: 0
    },
    confirmButton: {
        padding: 0,
        margin: 0
    },
    startGameText: {
        fontSize: 18,
    },
    inputText: {
        marginTop: 10
    },
    button: {
        width: 100
    },
    selectedNumberText: {
        marginTop: 10,
        color: "green",
        fontWeight: 'bold'
    },
    summaryContainer: {
        padding: 20,
        paddingTop: 10,
        alignItems:"center"
    }
})

export default StartingScreen
