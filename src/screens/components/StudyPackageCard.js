import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function StudyPackageCard({studyPackage}){
    return(
        <View style={styles.container} >
            <Image src={studyPackage.poster} style={styles.image} />
            <Text style={styles.studyPackageTitle} >{studyPackage.title}</Text>
            <View style={styles.buttonsContainer} >
                <TouchableOpacity style={styles.exploreButton} >
                    <Text style={styles.exploreButtonText} >Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyNowButton} >
                    <Text style={styles.buyNowButtonText} >Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'white',
        elevation:10,
        marginRight:10,
    },
    studyPackageTitle:{
        width:'80%',
    },
    image:{
        width:250,
        height:150,
        borderRadius:8,
        objectFit:'contain'
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    exploreButton:{
        width:120,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:4
    },
    buyNowButton:{
        width:120,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        borderRadius:4,
    },
    buyNowButtonText:{
        color:'white',
    },
    exploreButtonText:{
        color:'black',
    }
})
