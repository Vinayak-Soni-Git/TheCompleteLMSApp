import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CourseCategoryCard({courseCategory}) {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={courseCategory.poster}
                        style={styles.imageStyle}
                    />
                </View>
                <Text style={styles.categoryName}>
                    {courseCategory.categoryName}
                </Text>
                <View style={styles.iconTotalCoursesCountContainer}>
                    <Text style={styles.totalCoursesCountText}>
                        {courseCategory.totalCourses}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    imageStyle: {
        width: 100,
        height: 100,
    },
    imageContainer:{
        padding:20,
        borderRadius:100,
        backgroundColor:'black',
    },
    categoryName: {
        color: 'black',
        width: 'auto',
        textAlign: 'center',
        fontSize: 18,
    },
    iconTotalCoursesCountContainer: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
    },
    totalCoursesCountText: {
        color: 'black',
        fontSize: 16,
    },
});
