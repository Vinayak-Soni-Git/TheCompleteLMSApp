import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

export default function HomeActivityButton({activityButton}){
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.tabButton}>
                <View style={styles.buttonIconTextContainer}>
                    <Octicons name={activityButton.iconName} color='black' size={28} />
                    <Text style={styles.tabButtonText}>{activityButton.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginRight:5,
    },
    tabButton:{
        padding:20,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:8
    },
    buttonIconTextContainer:{
        flexDirection:'row',
        gap:5,
        alignItems:'center',

    },
    tabButtonText:{
        color:'black',
        fontWeight:'bold'
    }
})
