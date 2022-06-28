import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const CustomButton = (props) => {

    const { onPress, title } = props 

    return (
        <TouchableOpacity activeOpacity={0.4} style={{...styles.button,...props.style}} onPress={onPress}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>    
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.secondary,
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius:28
    }
})

export default CustomButton
