import React, {useRef, useEffect} from 'react';
import {
    View,
    Text,
    Modal,
    Animated,
    TouchableWithoutFeedback,
    StyleSheet, Image, TextInput, TouchableOpacity, FlatList
} from 'react-native';
import CouponCard from './CouponCard';
import {CouponsData} from '../../../constants/UIData';
import {CouponIcon} from '../../../constants/ImagesAndIcons';

const CouponsBottomSheet = ({visible, onClose}) => {
    const translateY = useRef(new Animated.Value(300)).current;
    const translateYAnimationObject1 = {toValue:0, duration:300, useNativeDriver:true};
    const translateYAnimationObject2 = {toValue: 300, duration:300, useNativeDriver: true};

    useEffect(() => {
        if (visible) {
            Animated.timing(translateY, translateYAnimationObject1).start();
        } else {
            Animated.timing(translateY, translateYAnimationObject2).start(() => onClose());
        }
    }, [visible]);

    return (
        <Modal
            transparent
            visible={visible}
            animationType='none'
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Animated.View style={[styles.modalContainer, {transform: [{translateY}]}]}>
                        <View>
                            <View style={styles.topImageContainer}>
                                <Image style={styles.topFixedImage}
                                       source={CouponIcon}/>
                            </View>
                            <View style={styles.applyCouponTextTotalValueContainer}>
                                <Text style={styles.applyCouponText}>Apply Coupon</Text>
                                <Text style={styles.totalPriceValue}>Total: ₹999</Text>
                            </View>
                            <View style={styles.couponCodeInputButtonContainer}>
                                <TextInput placeholder={'Enter Coupon Code'}/>
                                <TouchableOpacity>
                                    <Text style={styles.applyCouponButtonText}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.applyCouponTextTotalValueContainer}>
                                <Text style={styles.applyCouponText}>Available Coupon</Text>
                            </View>
                            <View>
                                <FlatList
                                    data={CouponsData}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({item}) => (
                                        <CouponCard coupon={item} />
                                    )}
                                />
                            </View>
                        </View>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: '#ddd',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    topImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#d1e0ff',
        position: 'absolute',
        top: -70,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    topFixedImage: {
        width: 60,
        height: 60,
    },
    applyCouponTextTotalValueContainer: {
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    applyCouponText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    totalPriceValue: {
        fontSize: 16,
    },
    couponCodeInputButtonContainer: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    applyCouponButtonText: {
        fontWeight: 'bold',
    }
});

export default CouponsBottomSheet;
