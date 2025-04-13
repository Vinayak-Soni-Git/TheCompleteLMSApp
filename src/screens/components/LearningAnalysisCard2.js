import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function LearningAnalysisCard2({item}) {
    return(
        <View style={styles.cardContainer} >
            <View style={styles.iconTextContainer} >
                <View style={[styles.iconContainer, {backgroundColor: item.iconContainerBgColor}]} >
                    <Image style={styles.icon} source={item.icon} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text} >{item.text}</Text>
                </View>
                <View>
                    <Text style={styles.count} >{item.count}m</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:10,
        borderWidth:1,
        borderRadius:4,
        borderColor:'lightgray',
    },
    count:{
        fontSize:18,
        fontWeight:'bold',
    },
    iconTextContainer:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
    },
    iconContainer:{
        padding:5,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        width:30,
        height:30,
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
    },
    textContainer:{
        flex:1,
    },
})
