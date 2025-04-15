import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {ApplicationRoutes} from '../../constants/Routes';

export default function PopularCourseCard({course}) {
    const discountPrice = Math.floor((course.price * 55) / 100);
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={() =>
                navigation.navigate(ApplicationRoutes.CourseDetailsScreen)
            }>
            <View style={styles.container}>
                <View style={styles.courseImageIconContainer} >
                    <Image style={styles.courseImage} source={course.poster} />
                    <View style={styles.iconOnImageContainer}>
                        <FontAwesome name={'users'} size={20} color={'white'} />
                        <Text style={styles.totalEnrolledStudentCount}>20</Text>
                    </View>
                </View>
                <Text style={styles.courseName}>{course.title}</Text>
                <Text style={styles.instructorName}>
                    By {course.instructor}
                </Text>
                <View style={styles.coursePriceDetailContainer}>
                    <Text style={styles.coursePriceWithDiscount}>
                        {discountPrice}
                    </Text>
                    <Text style={styles.courseTotalPrice}>₹{course.price}</Text>
                    <Text style={styles.courseDiscountAmountText}>55% off</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    courseImageIconContainer:{
        backgroundColor:'black',
        borderRadius:8,
    },
    courseImage: {
        objectFit: 'cover',
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    courseName: {
        width: '60%',
    },
    iconOnImageContainer: {
        flexDirection: 'row',
        gap: 5,
        position: 'absolute',
        top: 120,
        right: 10,
    },
    totalEnrolledStudentCount: {
        color: 'white',
    },
    instructorName: {
        color: 'gray',
    },
    coursePriceDetailContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    coursePriceWithDiscount: {
        color: 'green',
    },
    courseTotalPrice: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    courseDiscountAmountText: {
        color: 'green',
    },
});
