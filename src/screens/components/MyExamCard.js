import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

export default function MyExamCard({exam}){
    return(
        <View style={styles.container} >
            <Image style={styles.image} source={{uri:'https://cdn.pixabay.com/photo/2018/01/21/14/36/indian-flag-3096740__340.png'}} />
            <View style={styles.examNameExploreViewPlansButtonsContainer} >
                <Text style={styles.examName} >{exam.examName}</Text>
                <View style={styles.exploreViewPlansButtonsContainer} >
                    <Pressable style={styles.exploreButton} >
                        <Text style={styles.exploreButtonText} >Explore</Text>
                    </Pressable>
                    <Pressable style={styles.viewPlansButton} >
                        <Text style={styles.viewPlansButtonText} >View Plans</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:10,
        backgroundColor:'white',
        elevation:5,
        padding:10,
        borderRadius:4,
        marginTop:10,
    },
    image:{
        width:80,
        height:80,
        borderRadius:50,
    },
    examNameExploreViewPlansButtonsContainer:{
        flex:1,
        gap:5,
    },
    exploreViewPlansButtonsContainer:{
        flexDirection:'row',
        alignSelf:'flex-start',
        justifyContent:'space-evenly',
        gap:10,
    },
    exploreButtonText:{
        color:'gray'
    },
    exploreButton:{
        width:'40%',
        borderColor:'gray',
        borderWidth:1,
        borderRadius:4,
        padding:5,
        alignItems:'center'
    },
    viewPlansButton:{
        width:'40%',
        padding:5,
        alignItems:'center',
        backgroundColor:'black',
        borderRadius:4,
    },
    viewPlansButtonText:{
        color:'white',
    },
    examName:{
        color:'black',
        fontSize:18,
        fontWeight:'bold',
    }
})
