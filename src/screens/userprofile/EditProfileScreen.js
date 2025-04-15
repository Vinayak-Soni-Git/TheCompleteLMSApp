import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
    ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import {MaleDefaultAvatar} from '../../constants/ImagesAndIcons';
import {indiaStates} from '../../constants/UIData';
import CountryCodePicker from '../components/CountryCodePicker';

export default function EditProfileScreen() {
    const [firstName, setFirstName] = useState('Vinayak');
    const [lastName, setLastName] = useState('Soni');
    const [email, setEmail] = useState('vinayak@example.com');
    const [profilePhoto, setProfilePhoto] = useState(null); // base64 or URI

    const [countryCode, setCountryCode] = useState('IN');
    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [callingCode, setCallingCode] = useState('91');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const onSelect = (country) => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
    };

    const stateOptions = indiaStates.map((state) => ({
        label: state,
        value: state,
    }));

    const handleSelectImage = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
            },
            (response) => {
                if (response.didCancel) return;
                if (response.errorCode) {
                    Alert.alert('Error', response.errorMessage);
                    return;
                }
                if (response.assets && response.assets.length > 0) {
                    setProfilePhoto(response.assets[0].uri);
                }
            }
        );
    };

    const handleSave = () => {
       return null;
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Edit Profile</Text>

            <View style={styles.profilePhotoContainer}>
                <Image
                    source={
                        profilePhoto
                            ? { uri: profilePhoto }
                            : MaleDefaultAvatar
                    }
                    style={styles.profilePhoto}
                />
                <TouchableOpacity style={styles.editIcon} onPress={handleSelectImage}>
                    <FontAwesome name='camera' size={18} color='#fff' />
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>First Name</Text>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholder='Enter first name'
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholder='Enter last name'
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder='Enter email'
                keyboardType='email-address'
            />
            <Text style={styles.label}>Mobile</Text>
                <View style={styles.countryCodeMobileNumberInputGroupContainer}>

                    <View style={styles.countryCodeContainer}>
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
                                <Text style={styles.buttonText}>
                                  {selectedCountry ? `${selectedCountry.flag} ${selectedCountry.name}` : 'Select Country'}
                                </Text>
                              </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.phoneInput}
                        placeholder='Enter phone number'
                        keyboardType='phone-pad'
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
            <Text style={styles.label}>Select State</Text>
            <RNPickerSelect
                onValueChange={(value) => setState(value)}
                items={stateOptions}
                placeholder={{ label: 'Select a state', value: null }}
                value={state}
                style={pickerSelectStyles}
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
            <CountryCodePicker
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onSelect={(country) => setSelectedCountry(country)}
                  />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    profilePhotoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profilePhoto: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#ccc',
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: (120 - 30) / 2,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 6,
    },
    label: {
        fontSize: 16,
        marginBottom: 6,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    countryCodeMobileNumberInputGroupContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom:15,
    },
    countryCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#f2f2f2',
    },
    phoneInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        color: 'black',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        color: 'black',
        paddingRight: 30,
    },
    wrapper: {
        padding: 20,
    },
};
