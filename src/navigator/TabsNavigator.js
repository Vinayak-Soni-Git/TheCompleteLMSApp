import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../screens/userprofile/ProfileScreen';
import CoursesListScreen from '../screens/coursescreen/CoursesListScreen';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <FontAwesome name={'home'} size={28} color={'black'} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Profile'}
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return (
                            <FontAwesome
                                name={'user'}
                                size={28}
                                color={'black'}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name={'Courses'}
                component={CoursesListScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => {
                        return (
                            <Octicons
                                name={'stack'}
                                size={28}
                                color={'black'}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};
