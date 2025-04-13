import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import {giftedDonutChartData} from '../../../constants/UIData';

const CenterLabelComponent = () => {
    return(
        <View><Text style={styles.centerLabel} >Test Questions Analysis</Text></View>
    )
}

export default function GiftedDonutChart() {
    return (
        <View style={styles.container}>
            <PieChart
                data={giftedDonutChartData}
                radius={120}
                innerRadius={60}
                textColor='white'
                textSize={14}

                showText={true}
                showValuesAsLabels={true}
                strokeColor={'white'}
                strokeWidth={2}
                innerCircleBorderWidth={10}
                innerCircleBorderColor={'rgba(255, 255, 255, 0.2)'}
                centerLabelComponent={() => <CenterLabelComponent />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    centerLabel:{
        textAlign:'center',
        fontSize: 14,
        fontWeight: 'bold'
    }
})
