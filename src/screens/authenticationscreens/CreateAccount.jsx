import {
  ActivityIndicator,
  Alert,
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  EmailInput,
  FirstNameInput,
  LastNameInput,
  SetPasswordInput,
} from './Inputs';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ApplicationRoutes} from '../../constants/Routes';
import {GraduationHatIcon} from '../../constants/ImagesAndIcons';

export default function CreateAccount() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const slideAnim = useRef(new Animated.Value(-50)).current;

  const handleCreateAccount = () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Please fill all details');
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
      setAccountCreated(true);
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
          navigation.navigate(ApplicationRoutes.SignIn);
        });
      }, 2000);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {showPopup && (
        <Animated.View
          style={[styles.popup, {transform: [{translateY: slideAnim}]}]}>
          <Text style={styles.popupText}>
            Now you can login to your account
          </Text>
        </Animated.View>
      )}
      <View style={styles.createYourAccountTextContainer}>
        <Text style={styles.createYourAccountText}>Create Your Account</Text>
      </View>

      <View style={styles.hatIconContainer}>
        <Image style={styles.graduationHatIcon} source={GraduationHatIcon} />
      </View>

      <View style={styles.inputFieldsContainer}>
        <FirstNameInput value={firstName} onChangeText={setFirstName} />
        <LastNameInput value={lastName} onChangeText={setLastName} />
        <EmailInput value={email} onChangeText={setEmail} />
        <SetPasswordInput
          value={password}
          onChangeText={setPassword}
          secureText={securePassword}
          setSecureText={setSecurePassword}
        />
      </View>

      <View style={styles.createAccountButtonContainer}>
        <Pressable
          onPress={handleCreateAccount}
          style={[
            styles.createAccountButton,
            accountCreated && styles.verifiedButton, // Apply new style if verified
          ]}
          disabled={loading || accountCreated} // Disable after verification
        >
          {loading ? (
            <ActivityIndicator size={'small'} color={'white'} />
          ) : (
            <Text style={styles.createAccountButtonText}>
              {accountCreated
                ? 'Account Created Successfully'
                : 'Create Account'}
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
  createAccountButton: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  createAccountButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  createAccountButtonContainer: {
    marginTop: 20,
  },
  verifiedButton: {
    backgroundColor: '#4CAF50',
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 1,
  },
  popupText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
