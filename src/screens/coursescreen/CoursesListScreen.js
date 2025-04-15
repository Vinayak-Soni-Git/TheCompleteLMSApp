import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CourseCategoryCard from '../components/CourseCategoryCard';
import PopularCourseCard from '../components/PopularCourseCard';
import { courseCategories, programmingCourses } from '../../constants/UIData'

export default function CoursesListScreen() {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.courseCategoryNameTextArrowIconContainer}>
                        <Text style={styles.courseCategoryText}>All Categories</Text>
                        <FontAwesome name={'angle-right'} size={28}/>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={courseCategories}
                        renderItem={({item}) => (
                            <CourseCategoryCard courseCategory={item} />
                        )}/>
                </View>
                <View>
                    <View style={[styles.courseCategoryNameTextArrowIconContainer, {marginTop: 20}]}>
                        <Text style={styles.courseCategoryText}>Popular Courses</Text>
                        <FontAwesome name={'angle-right'} size={28}/>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={programmingCourses}
                        renderItem={({item}) => (
                            <PopularCourseCard course={item} />
                        )}/>
                </View>
                <View>
                    <View style={[styles.courseCategoryNameTextArrowIconContainer, {marginTop: 20}]}>
                        <Text style={styles.courseCategoryText}>Newly Added</Text>
                        <FontAwesome name='angle-right' size={28}/>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={programmingCourses}
                        renderItem={({item}) => (
                            <PopularCourseCard course={item} />
                        )}/>
                </View>

                <View>
                    <View style={[styles.courseCategoryNameTextArrowIconContainer, {marginTop: 20}]}>
                        <Text style={styles.courseCategoryText}>All Courses</Text>
                        <FontAwesome name='angle-right' size={28}/>
                    </View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={programmingCourses}
                        renderItem={({item}) => (
                            <PopularCourseCard course={item} />
                        )}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    courseCategoryNameTextArrowIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    courseCategoryText: {
        fontSize: 18,

    }
})
