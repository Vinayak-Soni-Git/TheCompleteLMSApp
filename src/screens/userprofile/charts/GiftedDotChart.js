import React from 'react';
import {StyleSheet, View} from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import {giftedDotChartData} from '../../../constants/UIData';

export default function GiftedDotChart() {
    return (
        <View style={styles.container}>
            <LineChart
                data={giftedDotChartData}
                hideRules={true}
                hideOrigin={true}
                hideDataPoints={false}
                dataPointsRadius={6}
                dataPointsColor='black'
                xAxisColor='black'
                yAxisColor='black'
                noOfSections={4}
                maxValue={100}
                width={250}
                height={200}
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
    }
})
