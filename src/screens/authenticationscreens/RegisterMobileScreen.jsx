import {ActivityIndicator, Alert, Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {UserMobileNumberInput} from './Inputs';
import {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ApplicationRoutes} from "../../constants/Routes";

export default function RegisterMobileScreen() {

    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const slideAnim = useRef(new Animated.Value(-50)).current;

    const handleValidate = () => {
        if (!mobileNumber || mobileNumber.length !== 10) {
            Alert.alert('Please enter a valid mobile number');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setShowPopup(true);

            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();

            setTimeout(() => {
                Animated.timing(slideAnim, {
                    toValue: -100,
                    duration: 500,
                    useNativeDriver: true,
                }).start(() => {
                    setShowPopup(false);
                    navigation.navigate(ApplicationRoutes.ValidateOtpScreen); // Navigate after popup disappears
                });
            }, 2000);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            {showPopup && (
                <Animated.View style={[styles.popup, { transform: [{ translateY: slideAnim }] }]}>
                    <Text style={styles.popupText}>OTP sent successfully to mobile number</Text>
                </Animated.View>
            )}

            <View style={styles.createYourAccountTextContainer}>
                <Text style={styles.createYourAccountText}>Create Your Account</Text>
            </View>

            <View style={styles.hatIconContainer}>
                <Image style={styles.graduationHatIcon}
                       source={require('../../assets/icons/hat-graduation-svgrepo-com.png')}/>
            </View>

            <View style={styles.inputFieldsContainer}>
                <UserMobileNumberInput value={mobileNumber} onChangeText={setMobileNumber}/>
            </View>

            <View style={styles.validateButtonContainer}>
                <Pressable onPress={handleValidate} style={styles.validateButton}>
                    {loading ? (
                        <ActivityIndicator size="small" color="white"/>
                    ) : (
                        <Text style={styles.validateButtonText}>Validate</Text>
                    )}
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    createYourAccountTextContainer: {
        alignItems: 'center',
    },
    createYourAccountText: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
    },
    hatIconContainer: {
        borderRadius: 50,
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        alignSelf: 'center',
    },
    graduationHatIcon: {
        width: 50,
        height: 50,
    },
    inputFieldsContainer: {
        marginTop: 20,
    },
    validateButton: {
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    validateButtonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    validateButtonContainer: {
        marginTop: 20,
    },
    popup: {
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        zIndex:1,
    },
    popupText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
