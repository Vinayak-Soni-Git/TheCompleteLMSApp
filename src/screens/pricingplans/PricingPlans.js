import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'react-native-paper';
import PackagePlanCard from '../components/PackagePlanCard';
import CouponSection from '../components/CouponSection';
import {globalStyles} from '../../global/GlobalStyles';
import CouponsBottomSheet from './bottomsheets/CouponsBottomSheet';
import {plans} from '../../constants/UIData';
import {InfiniteStarsBackgroundImage} from '../../constants/ImagesAndIcons';

export default function PricingPlans() {
    const [selectedPlan, setSelectedPlan] = useState('2years');
    const [modalVisible, setModalVisible] = useState(false);

    const openCouponsBottomSheet = () => {
        setModalVisible(true);
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.infinityBackgroundImage}
                source={{uri: InfiniteStarsBackgroundImage}}>
                <View style={styles.packageHeadlineContainer}>
                    <Text style={styles.packageHeadlineText}>
                        SmartOnlineExam Infinity Package for NEET
                    </Text>
                    <Text style={styles.packageFeatureText}>
                        Include 70+ courses
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.topRoundedRadiusContainer}>
                <CouponSection
                    openBottomSheetFunction={openCouponsBottomSheet}
                />
                <View style={[globalStyles.mt10ForContainer]}>
                    <FlatList
                        data={plans}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <PackagePlanCard
                                plan={item}
                                selectedPlan={selectedPlan}
                                setSelectedPlan={setSelectedPlan}
                            />
                        )}
                    />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.totalPrice}>
                        {plans.find(p => p.id === selectedPlan)?.price} For{' '}
                        {plans.find(p => p.id === selectedPlan)?.duration} plan
                    </Text>
                    <Button
                        mode="contained"
                        style={styles.payButton}
                        onPress={() => {}}>
                        Proceed to Pay
                    </Button>
                </View>
            </View>
            <CouponsBottomSheet
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    infinityBackgroundImage: {
        width: '100%',
        height: 180,
    },
    packageHeadlineContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    packageHeadlineText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    packageFeatureText: {
        fontSize: 18,
        color: 'white',
    },
    topRoundedRadiusContainer: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white',
        marginTop: -30,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: 'gray',
    },
    timer: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        color: 'red',
    },
    couponContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        marginRight: 10,
    },
    applyButton: {
        backgroundColor: '#007bff',
    },

    footer: {
        marginTop: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    payButton: {
        backgroundColor: '#007bff',
        width: '100%',
    },
});
