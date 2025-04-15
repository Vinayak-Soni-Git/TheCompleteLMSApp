import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RateTheCourseSection = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rate This Course</Text>

            <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((i) => (
                    <TouchableOpacity key={i} onPress={() => setRating(i)}>
                        <Icon
                            name={i <= rating ? 'star' : 'star-border'}
                            size={32}
                            color='#f5a623'
                            style={styles.star}
                        />
                    </TouchableOpacity>
                ))}
            </View>

            <TextInput
                style={styles.input}
                placeholder='Write a review...'
                multiline
                numberOfLines={4}
                value={review}
                onChangeText={setReview}
            />
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RateTheCourseSection;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginTop:20,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    starsContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    star: {
        marginRight: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        fontSize: 14,
        textAlignVertical: 'top',
        marginBottom: 16,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
});
