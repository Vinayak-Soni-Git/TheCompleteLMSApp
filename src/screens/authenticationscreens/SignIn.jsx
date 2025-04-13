import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { EmailInput, PasswordInput } from './Inputs';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {ApplicationRoutes} from '../../constants/Routes';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogIn = () => {
    if (!email || !password) {
      Alert.alert('Please fill all details');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate(ApplicationRoutes.DrawerNavigator);
    }, 2000);
  };

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={styles.welcomeBackTextContainer}>
              <Text style={styles.welcomeText}>Welcome Back!</Text>
            </View>

            <View style={styles.hatIconContainer}>
              <Image
                  style={styles.graduationHatIcon}
                  source={require('../../assets/icons/hat-graduation-svgrepo-com.png')}
              />
            </View>

            <View style={styles.otherLoginOptionsButtonsContainer}>
              <Pressable style={styles.otpLoginButton}>
                <Image
                    style={styles.otpLoginIcon}
                    source={require('../../assets/icons/mobile-phone-svgrepo-com.png')}
                />
                <Text style={styles.otpLoginButtonText}>Login With Mobile</Text>
              </Pressable>

              <Pressable style={styles.googleLoginButton}>
                <Image
                    style={styles.googleLoginIcon}
                    source={require('../../assets/icons/google-color-svgrepo-com.png')}
                />
                <Text style={styles.googleLoginButtonText}>Login With Google</Text>
              </Pressable>

              <Pressable style={styles.facebookLoginButton}>
                <Image
                    style={styles.facebookLoginIcon}
                    source={require('../../assets/icons/facebook-2-logo-svgrepo-com.png')}
                />
                <Text style={styles.facebookLoginButtonText}>Login With Facebook</Text>
              </Pressable>
            </View>

            <View style={styles.orTextContainer}>
              <Text style={styles.orText}>OR</Text>
            </View>

            <View style={styles.inputFieldsContainer}>
              <EmailInput value={email} onChangeText={setEmail} />
              <PasswordInput value={password} onChangeText={setPassword} secureText={secureText} setSecureText={setSecureText} />
            </View>

            <View style={styles.loginButtonContainer}>
              <Pressable onPress={handleLogIn} style={styles.loginButton}>
                {loading ? (
                    <ActivityIndicator size="small" color="white" />
                ) : (
                    <Text style={styles.loginButtonText}>Login</Text>
                )}
              </Pressable>
            </View>

            <View style={styles.createAccountButtonContainer}>
              <Pressable
                  onPress={() => navigation.navigate(ApplicationRoutes.RegisterMobileScreen)}
                  style={styles.createAccountButton}
              >
                <Text style={styles.createAccountButtonText}>Create Account</Text>
              </Pressable>
            </View>

            <View style={styles.havingTroubleButtonContainer}>
              <Pressable style={styles.havingTroubleButton}>
                <Text style={styles.havingTroubleButtonText}>
                  Having trouble logging in?
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    padding: 20,
  },
  welcomeBackTextContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
  otherLoginOptionsButtonsContainer: {
    marginTop: 10,
  },
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    gap: 10,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  googleLoginIcon: {
    width: 30,
    height: 30,
  },
  googleLoginButtonText: {
    color: 'black',
    fontSize: 16,
  },
  facebookLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    gap: 10,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  facebookLoginIcon: {
    width: 30,
    height: 30,
  },
  facebookLoginButtonText: {
    color: 'black',
    fontSize: 16,
  },
  otpLoginIcon: {
    width: 30,
    height: 30,
  },
  otpLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    gap: 10,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  otpLoginButtonText: {
    color: 'black',
    fontSize: 16,
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
  orTextContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
  orText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputFieldsContainer: {
    marginTop: 20,
  },
  loginButtonContainer: {},
  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  createAccountButtonContainer: {
    marginTop: 20,
  },
  createAccountButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    alignItems: 'center',
  },
  createAccountButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  havingTroubleButtonContainer: {
    marginTop: 20,
  },
  havingTroubleButton: {
    alignSelf: 'center',
  },
  havingTroubleButtonText: {
    fontWeight: 'bold',
  },
});
