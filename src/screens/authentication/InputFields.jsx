import React from 'react';
import {View, TextInput, StyleSheet, Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export const FirstNameInput = ({ value, onChangeText }) => (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={'gray'}
            placeholder="Enter Your First Name"
            autoCapitalize="none"
        />
    </View>
);

export const LastNameInput = ({ value, onChangeText }) => (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Enter Your Last Name"
            placeholderTextColor={'gray'}
            autoCapitalize="none"
        />
    </View>
);

export const UsernameInput = ({ value, onChangeText }) => (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Enter Username"
            placeholderTextColor={'gray'}
            autoCapitalize="none"
        />
    </View>
);

export const UserMobileNumberInput = ({ value, onChangeText }) => (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            value={value}
            textContentType={'telephoneNumber'}
            keyboardType={'phone-pad'}
            onChangeText={onChangeText}
            placeholder="Enter Your Mobile Number"
            placeholderTextColor={'gray'}
            maxLength={10}
            autoCapitalize="none"
        />
    </View>
);


export const EmailInput = ({ value, onChangeText }) => (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Enter Email"
            placeholderTextColor={'gray'}
            keyboardType="email-address"
            autoCapitalize="none"
        />
    </View>
);

export const PasswordInput = ({ value, onChangeText, secureText, setSecureText }) => (
    <View style={styles.passwordInputFiledContainer} >
        <TextInput
            style={styles.passwordInputField}
            placeholder="Enter password"
            placeholderTextColor={'gray'}
            secureTextEntry={secureText}
            value={value}
            keyboardType={'default'}
            onChangeText={onChangeText}
        />
        <Pressable onPress={() => setSecureText(!secureText)}>
            <MaterialIcons name={secureText ? 'visibility-off' : 'visibility'} size={24} color="gray" />
        </Pressable>
    </View>
);

export const SetPasswordInput = ({ value, onChangeText, secureText, setSecureText }) => (
    <View style={styles.passwordInputFiledContainer} >
        <TextInput
            style={styles.passwordInputField}
            placeholder="Set Your Password"
            placeholderTextColor={'gray'}
            secureTextEntry={secureText}
            value={value}
            keyboardType={'default'}
            onChangeText={onChangeText}
        />
        <Pressable onPress={() => setSecureText(!secureText)}>
            <MaterialIcons name={secureText ? 'visibility-off' : 'visibility'} size={24} color="gray" />
        </Pressable>
    </View>
);

export const OTPInput = ({ value, onChangeText, maxLength }) => (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Enter OTP"
            placeholderTextColor={'gray'}
            autoCapitalize="none"
            maxLength={maxLength}
        />
    </View>
);

const styles = StyleSheet.create({
    container: { marginBottom: 15 },
    input: {
        backgroundColor:'white',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        width: '100%',
        color:'black',
        maxHeight:50,
        height:50,
    },
    passwordInputFiledContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom:20,
        height:50,
        maxHeight:50,
    },
    passwordInputField:{
        flex:1,
        fontSize:16,
    },

});
