import {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Collapsible from 'react-native-collapsible';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcon from 'react-native-paper/src/components/MaterialCommunityIcon';
import {useNavigation} from '@react-navigation/native';
import {ApplicationRoutes } from '../../constants/Routes';

export const SubSection = ({title, description, items}) => {
    const navigation = useNavigation();
    const [collapsed, setCollapsed] = useState(true);
    const iconMap = {
        video: 'play',
        test: 'pencil',
        pdf: 'file-pdf',
    };

    const handlePress = (type) => {
        if (type === 'pdf') {
            // navigation.navigate(ApplicationRoutes.PdfViewerScreen);
        } else {
            return null;
        }
    };

    return (
        <View style={styles.subSection}>
            <TouchableOpacity
                onPress={() => setCollapsed(!collapsed)}
                style={styles.subHeader}>
                <View style={styles.moduleSubtitleDescriptionContainer} >
                    <Text style={styles.subTitle}>{title}</Text>
                    <Text style={styles.subDescription}>{description}</Text>
                </View>
                <MaterialIcons name={collapsed ? 'expand-more' : 'expand-less'} size={24}/>
            </TouchableOpacity>

            <Collapsible style={styles.collapsible} collapsed={collapsed}>
                {items.map((item) => (
                    <View key={item.id} style={styles.item}>
                        <View style={styles.itemRow}>
                            <Pressable style={styles.itemRow} onPress={() => handlePress(item.type)}>
                                <FontAwesome6 name={iconMap[item.type] || 'play'} size={22} style={styles.icon}/>
                                <Text style={styles.itemText}>{item.text}</Text>
                                <MaterialCommunityIcon style={styles.icon} name={item.locked ? 'lock' : 'eye'}
                                                       size={20}/>
                            </Pressable>
                        </View>
                        <Text style={styles.itemSubText}>{item.subText}</Text>
                    </View>
                ))}
            </Collapsible>
        </View>
    );
};

export const SingleSectionAccordion = ({accordionData}) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.sectionBox}>
                <Text style={styles.sectionTitle}>Course Module</Text>

                {accordionData.map((section) => (
                    <SubSection
                        key={section.id}
                        title={section.title}
                        description={section.description}
                        items={section.items}
                    />
                ))}
            </View>
        </ScrollView>
    );
};


export const FAQsSubSection = ({title, items}) => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <View style={styles.subSection}>
            <TouchableOpacity
                onPress={() => setCollapsed(!collapsed)}
                style={styles.subHeader}>
                <View style={styles.subTitleContainer} >
                    <Text style={styles.subTitle}>{title}</Text>
                </View>
                <MaterialIcons name={collapsed ? 'expand-more' : 'expand-less'} size={24}/>
            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
                {items.map((item) => (
                    <View key={item.id} style={styles.item}>
                        <View style={styles.itemRow}>
                            <Text style={styles.itemText}>{item.text}</Text>
                        </View>
                        <Text style={styles.itemSubText}>{item.subText}</Text>
                    </View>
                ))}
            </Collapsible>
        </View>
    );
};

export const FAQsSingleSectionAccordion = ({accordionData}) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.sectionBox}>

                {accordionData.map((section) => (
                    <FAQsSubSection
                        key={section.id}
                        title={section.title}
                        description={section.description}
                        items={section.item}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    sectionBox: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subSection: {
        marginBottom: 10,
        borderTopWidth: 1,
        borderColor: '#eee',
        paddingTop: 10,
    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subTitleContainer:{
        flex:1,
    },
    moduleSubtitleDescriptionContainer:{
        flex:1,
    },
    collapsible:{
        padding:10,
    },
    subTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    subDescription: {
        color: '#777',
        fontSize: 13,
        marginTop: 2,
    },
    item: {
        marginTop: 10,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#444',
    },
    itemText: {
        flex: 1,
        marginHorizontal: 10,
        fontSize: 15,
    },
    itemSubText: {
        color: '#999',
        fontSize: 12,
        marginLeft: 32,
        marginTop: 4,
    },
});
