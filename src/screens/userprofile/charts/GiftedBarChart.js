import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {giftedBarChartData, giftedBarChartLegendData} from '../../../constants/UIData';

const screenWidth = Dimensions.get('window').width;

export default function GiftedBarChart() {
    return (
        <View style={styles.container}>
            <BarChart
                initialSpacing={screenWidth/8}
                data={giftedBarChartData}
                barWidth={100}
                width={screenWidth}
                height={200}
                spacing={0}
                lineBehindBars={true}
            />

            <View style={styles.legendContainer}>
                {giftedBarChartLegendData.map((item, index) => (
                    <View key={index} style={styles.innerLegendContainer}>
                        <View style={[styles.legendLabelContainer, {backgroundColor: item.color}]} />
                        <Text>{item.label}</Text>
                    </View>
                ))}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    legendContainer:{
        flexDirection:'row',
    },
    innerLegendContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    legendLabelContainer:{
        width: 15,
        height: 15,
        marginRight: 5
    }
})
