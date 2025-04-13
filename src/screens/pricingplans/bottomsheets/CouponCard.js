import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import {TicketMask} from './TicketMask';

const CouponCard = ({coupon}) => {
    return (
        <MaskedView
            style={styles.maskedContainer}
            maskElement={<TicketMask width={350} height={100} />}>
            <View style={styles.container}>
                <View style={styles.leftSection}>
                    <Text style={styles.discountText}>₹{coupon.saveUpto} OFF</Text>
                </View>
                <View style={styles.rightSection}>
                    <View style={styles.topRow}>
                        <Text style={styles.couponCode}>{coupon.code}</Text>
                        <TouchableOpacity>
                            <Text style={styles.applyText}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.greenText}>Save up to {coupon.saveUpto} with this coupon</Text>
                    <Text style={styles.grayText}>Use code {coupon.code} & save up to {coupon.saveUpto}</Text>
                    {coupon.expiringSoon && <Text style={styles.redText}>Offer expiring soon</Text>}
                </View>
            </View>
        </MaskedView>
    );
};

const styles = StyleSheet.create({
    maskedContainer: {
        width: 350,
        height: 100,
        margin: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    leftSection: {
        width: 50,
        backgroundColor: '#154c92',
        alignItems: 'center',
        justifyContent: 'center',
    },
    discountText: {
        color: '#fff',
        transform: [{rotate: '-90deg'}],
        fontSize: 14,
        fontWeight: 'bold',
    },
    rightSection: {
        flex: 1,
        padding: 10,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    couponCode: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    applyText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#154c92',
    },
    greenText: {
        color: 'green',
    },
    grayText: {
        color: 'gray',
    },
    redText: {
        color: 'red',
        fontWeight: 'bold',
        marginTop: 2,
    },
});

export default CouponCard;
