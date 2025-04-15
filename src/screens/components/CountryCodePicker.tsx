import {Modal, View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {countriesCode} from '../../constants/UIData';
import React from 'react';

interface Country {
    name: string;
    code: string;
    dial_code: string;
    flag: string;
}

interface Props {
    visible: boolean;
    onClose: () => void;
    onSelect: (country: Country) => void;
}

const CountryCodePicker: React.FC<Props> = ({visible, onClose, onSelect}) => {
    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Select Country</Text>
                    <FlatList
                        data={countriesCode}
                        keyExtractor={item => item.code}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() => {
                                    onSelect(item);
                                    onClose();
                                }}>
                                <Text style={styles.flag}>{item.flag}</Text>
                                <Text style={styles.name}>
                                    {item.name} ({item.dial_code})
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                        <Text style={styles.closeText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CountryCodePicker;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
        maxHeight: '80%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12
    },
    flag: {
        fontSize: 24,
        marginRight: 12
    },
    name: {
        fontSize: 16
    },
    closeBtn: {
        alignItems: 'center',
        marginTop: 10
    },
    closeText: {
        color: 'red',
        fontWeight: 'bold'
    },
});
