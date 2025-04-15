import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsNavigator} from './TabsNavigator';

import SignIn from '../screens/authentication/SignIn';
import RegisterMobileScreen from '../screens/authentication/RegisterMobileScreen';
import ValidateOtpScreen from '../screens/authentication/ValidateOtpScreen';
import CreateAccountScreen from '../screens/authentication/CreateAccountScreen';
import DrawerNavigator from './DrawerNavigator';
import Home from '../screens/home/Home';
import PricingPlans from '../screens/pricingplans/PricingPlans';
import ProfileScreen from '../screens/userprofile/ProfileScreen';
import {ApplicationRoutes} from '../constants/Routes';
import ProfileAndSettingsScreen from '../screens/userprofile/ProfileAndSettingsScreen';
import EditProfileScreen from '../screens/userprofile/EditProfileScreen';
import CoursesListScreen from '../screens/coursescreen/CoursesListScreen';
import CourseDetailsScreen from '../screens/coursescreen/CourseDetailsScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{headerShown: true}}
                    initialRouteName={ApplicationRoutes.SignIn}>
                    <Stack.Screen name={ApplicationRoutes.SignIn} component={SignIn}/>
                    <Stack.Screen name={ApplicationRoutes.RegisterMobileScreen} component={RegisterMobileScreen}/>
                    <Stack.Screen name={ApplicationRoutes.ValidateOtpScreen} component={ValidateOtpScreen}/>
                    <Stack.Screen name={ApplicationRoutes.CreateAccount} component={CreateAccountScreen} options={{gestureEnabled: false}}/>
                    <Stack.Screen name={ApplicationRoutes.DrawerNavigator} component={DrawerNavigator} options={{headerShown:false}}/>
                    <Stack.Screen name={ApplicationRoutes.TabsNavigator} component={TabsNavigator}/>
                    <Stack.Screen name={ApplicationRoutes.Home} component={Home}/>
                    <Stack.Screen name={ApplicationRoutes.ProfileScreen} component={ProfileScreen}/>
                    <Stack.Screen name={ApplicationRoutes.PricingPlansScreen} component={PricingPlans}/>
                    <Stack.Screen name={ApplicationRoutes.CoursesListScreen} component={CoursesListScreen}/>
                    <Stack.Screen name={ApplicationRoutes.CourseDetailsScreen} component={CourseDetailsScreen}/>
                    <Stack.Screen name={ApplicationRoutes.UserProfileAndSettingsScreen} component={ProfileAndSettingsScreen}/>
                    <Stack.Screen name={ApplicationRoutes.EditProfileScreen} component={EditProfileScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
