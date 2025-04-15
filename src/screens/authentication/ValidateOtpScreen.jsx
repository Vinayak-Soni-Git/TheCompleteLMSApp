import React, { useState } from 'react';
import {Image, Pressable, StyleSheet, Text, View, ActivityIndicator, Alert} from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { useNavigation } from '@react-navigation/native';
import {ApplicationRoutes} from '../../constants/Routes';
import { PersonProtectionIcon } from '../../constants/ImagesAndIcons'

export default function ValidateOtpScreen() {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false); // Track OTP verification status
    const navigation = useNavigation();

    const handleVerifyOtp = () => {
        if (otp.length !== 6) {
            Alert.alert('Please enter a valid 6-digit OTP');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setVerified(true);

            setTimeout(() => {
                navigation.navigate(ApplicationRoutes.CreateAccount);
            }, 1500);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.validateOtpTextContainer}>
                <Text style={styles.validateOtpText}>Validate OTP</Text>
            </View>

            <View style={styles.protectionIconContainer}>
                <Image
                    style={styles.protectionIcon}
                    source={PersonProtectionIcon}
                />
            </View>

            <View style={styles.instructionsTextContainer}>
                <Text style={styles.enterVerificationCodeText}>Enter Verification Code</Text>
                <Text style={styles.sendToYourMobileText}>Sent to your mobile number</Text>
            </View>

            <View style={styles.otpInputFieldContainer}>
                <OtpInput
                    numberOfDigits={6}
                    focusColor={'black'}
                    focusStickBlinkingDuration={400}
                    onTextChange={setOtp}
                />
            </View>

            <View style={styles.loginButtonContainer}>
                <Pressable
                    onPress={handleVerifyOtp}
                    style={[
                        styles.loginButton,
                        verified && styles.verifiedButton,
                    ]}
                    disabled={loading || verified}
                >
                    {loading ? (
                        <ActivityIndicator size='small' color='white' />
                    ) : (
                        <Text style={styles.loginButtonText}>
                            {verified ? 'Verified' : 'Verify'}
                        </Text>
                    )}
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    validateOtpTextContainer: {
        alignItems: 'center',
    },
    validateOtpText: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
    },
    protectionIconContainer: {
        borderRadius: 50,
        backgroundColor: 'white',
        padding: 20,
        marginTop: 10,
        alignSelf: 'center',
    },
    protectionIcon: {
        width: 100,
        height: 100,
    },
    enterVerificationCodeText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    sendToYourMobileText: {
        alignSelf: 'center',
        fontSize: 16,
    },
    instructionsTextContainer: {
        marginTop: 20,
    },
    otpInputFieldContainer: {
        marginTop: 20,
    },
    loginButton: {
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    verifiedButton: {
        backgroundColor: '#4CAF50',
    },
    loginButtonText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    loginButtonContainer: {
        marginTop: 20,
    },
});
