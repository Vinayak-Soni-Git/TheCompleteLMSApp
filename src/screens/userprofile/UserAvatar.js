import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserAvatar({ name, imageUri, size = 60 }){

    const getInitials = (fullName) => {
        if (!fullName) return '';
        const names = fullName.trim().split(' ');
        return names.length === 1
            ? names[0][0].toUpperCase()
            : (names[0][0] + names[names.length - 1][0]).toUpperCase();
    };

    return (
        <View style={[styles.container, { width: size, height: size }]}>
            {imageUri ? (
                <Image
                    source={{ uri: imageUri }}
                    style={[styles.image, { width: size, height: size}]}
                />
            ) : (
                <View style={[styles.initialsContainer, { width: size, height: size}]}>
                    <Text style={[styles.initialsText, { fontSize: size / 2 }]}>{getInitials(name)}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:8,
    },
    image: {
        resizeMode: 'cover',
    },
    initialsContainer: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:8,
    },
    initialsText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

