import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Svg, Line} from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CouponSection = ({openBottomSheetFunction}) => {
    return (
        <View style={styles.container}>
            <View style={styles.couponRow}>
                <Text style={styles.couponText}>SAVE20 - 20% OFF</Text>
                <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyText}>Apply</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dottedLineContainer}>
                <Svg height='1' width='100%'>
                    <Line x1='0' y1='0' x2='100%' y2='0' stroke='gray' strokeWidth='2' strokeDasharray='5,5'/>
                </Svg>
            </View>
            <TouchableOpacity onPress={openBottomSheetFunction} style={styles.viewMoreCouponsButton} >
                <Text style={styles.viewMoreText}>View More Coupons</Text>
                <FontAwesome5 name={'angle-right'} size={20} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    couponRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    couponText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    applyButton: {
        backgroundColor: 'black',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    applyText: {
        color: 'white',
        fontWeight: 'bold',
    },
    dottedLineContainer: {

    },
    viewMoreText: {
        textAlign: 'center',
        color:'black',
        fontWeight: 'bold',
    },
    viewMoreCouponsButton:{
        marginTop:10,
        gap:5,
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
    }
});

export default CouponSection;
