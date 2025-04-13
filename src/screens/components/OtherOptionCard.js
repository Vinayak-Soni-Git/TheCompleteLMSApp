import {Image, StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function OtherOptionCard({otherOptionCard}) {
    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <Image source={otherOptionCard.icon} style={styles.icon} />
            </View>
            <View style={styles.textsContainer} >
                <Text style={styles.title}>{otherOptionCard.title}</Text>
            </View>
            <View>
                <FontAwesome5 name={'angle-right'} color={'gray'} size={18}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10,
    },
    textsContainer:{
        flex:1,
    },
    title:{
        fontSize:17,
    },
    iconsContainer: {
        width:'12%',
    },
    icon:{
        width:22,
        height:22,
    },
})
