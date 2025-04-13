import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function CommonButton({title, onPress, buttonStyle, textStyle}) {
    return (
        <View style={styles.commonButtonContainer} >
            <TouchableOpacity style={buttonStyle} onPress={onPress}>
                <Text style={textStyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    commonButtonContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:5,
    },

})
