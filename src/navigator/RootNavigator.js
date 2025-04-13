import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsNavigator} from './TabsNavigator';

import SignIn from '../screens/authenticationscreens/SignIn';
import RegisterMobileScreen from '../screens/authenticationscreens/RegisterMobileScreen';
import ValidateOtpScreen from '../screens/authenticationscreens/ValidateOtpScreen';
import CreateAccount from '../screens/authenticationscreens/CreateAccount';
import DrawerNavigator from './DrawerNavigator';
import Home from '../screens/home/Home';
import PricingPlans from '../screens/pricingplans/PricingPlans';
import ProfileScreen from '../screens/profilescreens/ProfileScreen';
import {ApplicationRoutes} from '../constants/Routes';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{headerShown: false}}
                    initialRouteName={ApplicationRoutes.SignIn}>
                    <Stack.Screen name={ApplicationRoutes.SignIn} component={SignIn}/>
                    <Stack.Screen name={ApplicationRoutes.RegisterMobileScreen} component={RegisterMobileScreen}/>
                    <Stack.Screen name={ApplicationRoutes.ValidateOtpScreen} component={ValidateOtpScreen}/>
                    <Stack.Screen name={ApplicationRoutes.CreateAccount} component={CreateAccount} options={{gestureEnabled: false}}/>
                    <Stack.Screen name={ApplicationRoutes.DrawerNavigator} component={DrawerNavigator}/>
                    <Stack.Screen name={ApplicationRoutes.TabsNavigator} component={TabsNavigator}/>
                    <Stack.Screen name={ApplicationRoutes.Home} component={Home}/>
                    <Stack.Screen name={ApplicationRoutes.ProfileScreen} component={ProfileScreen}/>
                    <Stack.Screen name={ApplicationRoutes.PricingPlansScreen} component={PricingPlans}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
