import React, {useState} from 'react';
import {View, Text, useWindowDimensions, StyleSheet, Image, Pressable} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import Analysis from './Analysis';
import MyActivity from './MyActivity';
import {VinayakAvatarImage} from '../../constants/ImagesAndIcons';

export default function ProfileScreen() {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'analysis', title: 'Analysis'},
        {key: 'activity', title: 'My Activity'},
    ]);

    const renderScene = ({route}) => {
        switch (route.key) {
            case 'analysis':
                return <Analysis/>;
            case 'activity':
                return <MyActivity/>;
            default:
                return null;
        }
    };

    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={styles.tabBarIndicator}
            style={styles.tabBar}
            inactiveColor={'gray'}
            activeColor={'black'}
            renderLabel={({route, focused}) => (
                <Text style={{color: focused ? 'black' : 'gray', fontSize: 16}}>
                    {route.title}
                </Text>
            )}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.userNameImageExamNameContainer}>
                <Image style={styles.userImage}
                       source={{uri: VinayakAvatarImage}}/>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>Vinayak Soni</Text>
                    <Text>SOE NEET</Text>
                </View>
            </View>
            <View style={styles.editProfileUpgradeButtonContainer}>
                <Pressable style={styles.editProfileButton}>
                    <Text>Edit Profile</Text>
                </Pressable>
                <Pressable style={styles.upgradeButton}>
                    <Text>Upgrade</Text>
                </Pressable>
            </View>

            <View style={styles.tabViewContainer}>
                <TabView
                    navigationState={{index, routes}}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{width: layout.width}}
                    renderTabBar={renderTabBar}
                    tabBarPosition={'top'}
                    lazy={true}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:10,
    },
    scrollView: {
        flexGrow: 1,
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    userNameImageExamNameContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    userInfoContainer: {},
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    editProfileUpgradeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    editProfileButton: {
        width: '45%',
        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 5,
        alignItems: 'center',
    },
    upgradeButton: {
        width: '45%',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        alignItems: 'center',
    },
    tabViewContainer: {
        flex: 1,
        marginTop:10,
    },
    tabBarIndicator: {
        backgroundColor: 'black',
        height: 4,
    },
    tabBar: {
        backgroundColor: 'white',
        elevation: 5,
    },
});
