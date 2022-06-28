import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { colors } from '../../../utils/colors'


const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
           <Text style={styles.number}>{props.children}</Text>     
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    borderWidth:2,
    borderColor:colors.primary,
    padding:10,
    // width:'100%',
    // backgroundColor:"red",
    borderRadius:8,
    marginVertical:10
},
number:{
    color:colors.secondary,
    fontSize:22
}
})

export default NumberContainer
