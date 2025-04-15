import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import UserAvatar from './UserAvatar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {ApplicationRoutes} from '../../constants/Routes';

export default function ProfileAndSettingsScreen() {
    const navigation = useNavigation();

    const settingsOptions = [
        {icon: 'wallet', label: 'My Wallet'},
        {icon: 'heart', label: 'My Wishlist'},
        {icon: 'receipt', label: 'My Subscription'},
        {icon: 'history', label: 'Purchase History'},
        {icon: 'cog', label: 'Settings'},
        {icon:'sign-out-alt', label:'Logout'},
    ];

    return (
        <View style={styles.container}>
            <View style={styles.profileTextEditButtonContainer}>
                <View style={styles.textIconContainer}>
                    <FontAwesome name='user' size={25} color='white'/>
                    <Text style={styles.topLeftProfileText}>Profile</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate(ApplicationRoutes.EditProfileScreen)} >
                        <FontAwesome name='pencil' size={25} color='white'/>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.userInfoPicContainer}>
                <UserAvatar name='Vinayak Soni' size={120}/>
                <Text style={styles.userFullName}>Vinayak Soni</Text>
                <Text style={styles.userEmail}>vinayaksoni106@gmail.com</Text>
                <Text style={styles.userMobileNumber}>+919672738437</Text>
            </View>

            <View style={styles.optionsContainer}>
                {settingsOptions.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.optionRow}>
                        <View style={styles.leftIconOptionNameContainer} >
                            <FontAwesome5 name={item.icon} size={20} color='#333' style={styles.optionIcon}/>
                            <Text style={styles.optionText}>{item.label}</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={20} color='#333' style={styles.optionIcon}/>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoPicContainer: {
        backgroundColor: '#3a3a3a',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
    },
    profileTextEditButtonContainer: {
        backgroundColor: '#3a3a3a',
        padding: 20,
    },
    textIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topLeftProfileText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    userFullName: {
        color: 'white',
        fontSize: 18,
        marginVertical: 2,
    },
    userEmail: {
        color: 'white',
        marginVertical: 2,
    },
    userMobileNumber: {
        color: 'white',
        marginVertical: 2,
    },
    optionsContainer: {
        padding: 20,
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    optionIcon: {
        marginRight: 15,
        width: 25,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    leftIconOptionNameContainer:{
        flex:1,
        flexDirection:'row',
    }
})
