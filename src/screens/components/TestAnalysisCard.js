import {Image, StyleSheet, Text, View} from 'react-native';

export default function TestAnalysisCard({analysisCard}) {
    return(
        <View style={styles.container} >
            <Image style={styles.icon} source={analysisCard.icon} />
            <View style={styles.testTotalsByYouTextContainer} >
                <Text style={styles.mainText} >{analysisCard.mainText}</Text>
                <Text style={styles.secondaryText}>{analysisCard.secondaryText}</Text>
            </View>
                <Text style={[styles.value, {fontSize:18}]}>
                    {analysisCard.id === 3 || analysisCard.id === 4 ? `${analysisCard.value}s`: `${analysisCard.value}`}
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
        gap:5,
    },
    icon:{
        width:30,
        height:30,
    },
    testTotalsByYouTextContainer:{
        flex:1,
        alignItems:'flex-start',
    },
    mainText:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
    },
    secondaryText:{
        color:'gray',
    },
    value:{
        fontWeight:'bold',
    }
})
