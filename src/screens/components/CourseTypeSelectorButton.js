import {Pressable, StyleSheet, Text} from 'react-native';

export default function CourseTypeSelectorButton({courseType, indexCheckFunction, indexCheck}){
    return (
        <Pressable onPress={indexCheckFunction} style={indexCheck === courseType.id ? {...styles.buttonSelected} : {...styles.button}} >
            <Text style={indexCheck === courseType.id ? {...styles.textSelected} : {...styles.text}} >{courseType.courseTypeName}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button:{
        padding:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'gray',
        marginRight:10,
    },
    text:{
        color:'gray',
        fontSize:14,
    },
    buttonSelected:{
        padding:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'black',
        marginRight:10,
    },
    textSelected:{
        color:'black',
        fontSize:14,
        fontWeight:'bold'
    }
})
