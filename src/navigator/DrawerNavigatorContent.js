import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {ApplicationRoutes} from '../constants/Routes';
import ShareAndEarn from '../screens/shareandearn/ShareAndEarn';

export default function DrawerNavigatorContent(props) {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const openShareAndEarnSheet = () => {
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.avatarContainer}>
                    <FontAwesome5 name={'book'} size={50}/>
                    <View style={styles.userDetailsContainer}>
                        <Text style={styles.userVision}>Vision</Text>
                        <Text style={styles.upgradeButton}>Upgrade</Text>
                    </View>

                </View>
                <DrawerItem labelStyle={styles.drawerItemLabel} label={'Explore Courses'} icon={({color, size}) => (
                    <FontAwesome5 name={'map'} size={28}/>
                )}/>
                <DrawerItem onPress={()=>navigation.navigate(ApplicationRoutes.PricingPlansScreen)} label='Pricing Plans' labelStyle={styles.drawerItemLabel}  icon={({color, size}) => (
                    <Entypo name={'price-tag'} size={28}/>
                )}/>
                <DrawerItem onPress={openShareAndEarnSheet} label={'Refer & Earn'} labelStyle={styles.drawerItemLabel} icon={({color, size}) => (
                    <FontAwesome5 name={'share-alt'} size={28}/>
                )}/>
                <DrawerItem labelStyle={styles.drawerItemLabel} label={'Change Exam'} icon={({color, size}) => (
                    <FontAwesome5 name={'exchange-alt'} size={28}/>
                )}/>
                <DrawerItem labelStyle={styles.drawerItemLabel} label='Classes' icon={({color, size}) => (
                    <MaterialCommunityIcons name='google-classroom' size={28}/>
                )}/>
                <DrawerItem labelStyle={styles.drawerItemLabel} label='Ask Your Doubts' icon={({color, size}) => (
                    <FontAwesome5 name={'microphone'} size={28}/>
                )}/>
                <DrawerItem labelStyle={styles.drawerItemLabel} label='Challenge Zone' icon={({color, size}) => (
                    <FontAwesome5 name='box' size={28}/>
                )}/>
                <DrawerItem labelStyle={styles.drawerItemLabel} label='Performance' icon={({color, size}) => (
                    <FontAwesome5 name='chart-line' size={28}/>
                )}/>
                <DrawerItem labelStyle={styles.drawerItemLabel} label='Exam Alert' icon={({color, size}) => (
                    <MaterialCommunityIcons name='alert' size={28}/>
                )}/>
                <DrawerItem labelStyle={styles.drawerItemLabel} label='Saved' icon={({color, size}) => (
                    <FontAwesome5 name='save' size={28}/>
                )}/>
                <DrawerItem labelStyle={styles.drawerItemLabel} label='Notification' icon={({color, size}) => (
                    <MaterialIcons name='notifications-on' size={28}/>
                )}/>
                <DrawerItem labelStyle={styles.drawerItemLabel} label='Sign Out' icon={({color, size}) => (
                    <FontAwesome5 name='sign-out-alt' size={28}/>
                )}/>
                <ShareAndEarn visible={modalVisible} onClose={() => setModalVisible(false)} />
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarStyle: {
        borderWidth: 4,
        borderColor: 'black',
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    userVision: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
    },
    upgradeButton: {
        fontSize: 15,
        color: 'green',
        fontWeight: 'bold',
    },
    userDetailsContainer: {
        margin: 10,
    },
    drawerItemLabel: {
        fontSize: 16,
        color: 'black',
        marginLeft: 10,
    }
})
