import React, {useRef, useState} from 'react';
import * as Progress from 'react-native-progress';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import OfferCard from '../components/OfferCard';
import CourseTypeSelectorButton from '../components/CourseTypeSelectorButton';
import HomeActivityButton from '../components/HomeActivityButton';
import CourseCard from '../components/CourseCard';
import CommonButton from '../components/CommonButton';
import StudyPackageCard from '../components/StudyPackageCard';
import OtherOptionCard from '../components/OtherOptionCard';
import {globalStyles} from '../../global/GlobalStyles';

import {
    AllCourses,
    CoursesTypeData,
    HomeActivityButtonData,
    OffersData,
    OtherOptionsData,
    StudyPackagesData,
} from '../../constants/UIData';
import {FireIcon} from '../../constants/ImagesAndIcons';

export default function Home({navigation}) {
    const flatListRef = useRef(null);
    const [courseTypeButtonIndexCheck, setCourseTypeButtonIndexCheck] = useState(1);
    const [selectedType, setSelectedType] = useState('All Courses');
    const [visibleCount, setVisibleCount] = useState(5);

    const filteredCourses =
        selectedType === 'All Courses'
            ? AllCourses
            : AllCourses.filter(course => course.type === selectedType);

    const visibleCourses = filteredCourses.slice(0, visibleCount);

    const handleTypeSelect = (id, type) => {
        setCourseTypeButtonIndexCheck(id);
        setSelectedType(type);
        setVisibleCount(5);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{flexGrow: 1}}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}>
                <View style={styles.tabButtonsContainer}>
                    <TouchableOpacity style={styles.tabButton}>
                        <View style={styles.buttonIconTextContainer}>
                            <FontAwesome5
                                name={'play'}
                                color={'black'}
                                size={18}
                            />
                            <Text style={styles.tabButtonText}>
                                Learn & Practice
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton}>
                        <View style={styles.buttonIconTextContainer}>
                            <FontAwesome5
                                name={'book'}
                                type={'MaterialCommunityIcons'}
                                color={'black'}
                                size={18}
                            />
                            <Text style={styles.tabButtonText}>Explore</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.offerCardListContainer}>
                    <FlatList
                        ref={flatListRef}
                        data={OffersData}
                        horizontal={true}
                        nestedScrollEnabled={true}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.offerId}
                        renderItem={({item}) => <OfferCard offer={item} />}
                    />
                </View>
                <View style={styles.greetingTextContainer}>
                    <Text style={styles.greetingText}>Hi Vinayak!</Text>
                    <Text style={styles.getStartedGreetingText}>
                        Let's get started for NEET with SmartOnlineExam
                    </Text>
                </View>
                <View style={styles.homeActivityButtonListContainer}>
                    <FlatList
                        data={HomeActivityButtonData}
                        horizontal={true}
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <HomeActivityButton activityButton={item} />
                        )}
                    />
                </View>
                <View style={styles.myCoursesTextContainer}>
                    <Text style={styles.greetingText}>My Courses</Text>
                </View>

                <View style={styles.courseTypeSelectorButtonListContainer}>
                    <FlatList
                        data={CoursesTypeData}
                        horizontal={true}
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <CourseTypeSelectorButton
                                courseType={item}
                                indexCheckFunction={() =>
                                    handleTypeSelect(
                                        item.id,
                                        item.courseTypeName
                                    )
                                }
                                indexCheck={courseTypeButtonIndexCheck}
                            />
                        )}
                    />
                </View>
                <View style={styles.courseCardListContainer}>
                    <FlatList
                        data={visibleCourses}
                        horizontal={false}
                        nestedScrollEnabled={true}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <CourseCard course={item} />}
                    />
                    {visibleCount < filteredCourses.length && (
                        <CommonButton
                            title={'Load More'}
                            buttonStyle={styles.loadMoreButton}
                            textStyle={styles.loadMoreButtonText}
                            onPress={() => setVisibleCount(prev => prev + 5)}
                        />
                    )}
                </View>
                <View style={styles.continueWhereYouLeftTextContainer}>
                    <Text style={styles.greetingText}>
                        Continue where you left
                    </Text>
                </View>

                <View style={styles.basicPlanContainer}>
                    <Text style={styles.whiteBoldText}>
                        Join SmartOnlineExam
                    </Text>
                    <Text style={styles.whiteBoldText}>
                        Premium Plans starting at INR 50/month
                    </Text>
                    <CommonButton
                        title={'View Plans'}
                        onPress={() => {}}
                        buttonStyle={styles.viewPlansButton}
                        textStyle={styles.viewPlanButtonText}
                    />
                </View>

                <View style={styles.todayStreakProgressContainer}>
                    <View style={styles.fireIconTextContainer}>
                        <View style={styles.fireIconContainer}>
                            <Image source={FireIcon} style={styles.fireImage} />
                        </View>
                        <View style={styles.uniqueStreakTextContainer}>
                            <Text style={styles.streakProgressText}>
                                Today's Streak Progress
                            </Text>
                            <Text style={styles.studyTimeAdviseText}>
                                Study 10 Minutes daily to build your Steak
                            </Text>
                        </View>
                    </View>
                    <View style={styles.progressMinutesTextContainer}>
                        <Text>Your Progress</Text>
                        <Text>20 MINS</Text>
                    </View>
                    <View>
                        <View style={styles.progressBarContainer}>
                            <Progress.Bar
                                backgroundColor={'white'}
                                color={'black'}
                                progress={0.2}
                                width={360}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.studyPackageContainer}>
                    <Text style={styles.greetingText}>Study Package</Text>
                </View>
                <View>
                    <FlatList
                        data={StudyPackagesData}
                        horizontal={true}
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => (
                            <StudyPackageCard studyPackage={item} />
                        )}
                    />
                </View>
                <View style={styles.otherOptionTextContainer}>
                    <Text style={styles.greetingText}>Other Options</Text>
                </View>
                <View>
                    {OtherOptionsData.map((item, index) => (
                        <OtherOptionCard key={index} otherOptionCard={item} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    tabButtonsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    tabButton: {
        alignItems: 'center',
        width: '40%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
    },
    tabButtonText: {
        color: 'black',
        fontSize: 16,
    },
    otherOptionTextContainer:{
        marginTop:10,
    },
    buttonIconTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    greetingText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
    },
    getStartedGreetingText: {
        color: 'black',
        fontWeight: 'bold',
    },
    basicPlanContainer: {
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: 'black',
        paddingTop: 20,
        elevation: 5,
        paddingBottom: 20,
    },
    viewPlansButton: {
        width: 300,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
    },
    viewPlanButtonText: {
        color: 'black',
        fontSize: 15,
    },

    loadMoreButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 8,
    },
    loadMoreButtonText: {
        color: 'white',
    },
    todayStreakProgressContainer: {
        marginTop: 20,
        paddingBottom: 20,
        elevation: 5,
        backgroundColor: 'white',
    },
    fireIconContainer: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        width: '18%',
        padding: 15,
        backgroundColor: '#F6CBA0',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    fireImage: {
        width: 30,
        height: 30,
    },
    fireIconTextContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    streakProgressText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    studyTimeAdviseText: {
        color: 'black',
    },
    progressMinutesTextContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    progressBarContainer: {
        marginTop: 10,
        paddingLeft: 10,
    },
    greetingTextContainer: {
        marginTop:10,
    },
    studyPackageContainer: {
        marginTop:10,
    },
    whiteBoldText:{
        color:'white',
        fontWeight:'bold',
    },
    offerCardListContainer:{
        marginTop:10,
    },
    homeActivityButtonListContainer: {
        marginTop:10,
    },
    continueWhereYouLeftTextContainer: {
        marginTop:10,
    },
    courseCardListContainer: {
        marginTop:10,
    },
    courseTypeSelectorButtonListContainer:{
        marginTop:10,
    },
    myCoursesTextContainer: {
        marginTop: 10,
    },

});
