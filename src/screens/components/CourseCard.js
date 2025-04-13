import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function CourseCard({course}){
    return(
        <Pressable style={styles.pressableContainer} >
            <View style={styles.contentContainer} >
                <View style={styles.imageTitleContainer} >
                    <Image src={course.poster} style={styles.coursePoster} />
                    <Text style={styles.courseTitle} >{course.title}</Text>
                </View>
                <FontAwesome5 name={'angle-right'} color={'gray'} size={18}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contentContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        gap:10,
    },
    coursePoster:{
        width:80,
        height:80,
        borderRadius:8,
    },
    pressableContainer:{
        borderRadius:8,
        marginTop:10,
        elevation:5,
        backgroundColor:'white',
    },
    imageTitleContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
    },
    courseTitle:{
        width:'70%',
        fontSize:17,
        fontWeight:'bold',
    }
})
