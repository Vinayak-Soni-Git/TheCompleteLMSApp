import React, {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
    Animated,
    Easing,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import { accordionsSubSections, faqsAccordionData, tabBarSections } from '../../constants/UIData';
import { FAQsSingleSectionAccordion, SingleSectionAccordion } from '../components/AccordionListUIs';
import RateTheCourseSection from '../components/RateTheCourseSection';
import CourseOverviewCard from '../components/CourseOverviewCard';
import { useRef, useState, useEffect } from 'react';

export default function CourseDetailsScreen() {
    const layout = useWindowDimensions();
    const scrollViewRef = useRef(null);
    const sectionRefs = useRef({});
    const [showTabBar, setShowTabBar] = useState(false);
    const [index, setIndex] = useState(0);
    const [routes] = useState(tabBarSections);
    const tabBarTranslateY = useRef(new Animated.Value(-50)).current; // Initially off-screen
    const activeTabIndicatorTranslateX = useRef(new Animated.Value(0)).current;
    const activeTabIndicatorWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (tabBarSections.length > 0) {
            const initialTab = tabBarSections[0];
            const initialWidth = initialTab?.title?.length * 10; // Approximate width
            activeTabIndicatorWidth.setValue(initialWidth || 0);
        }
    }, [tabBarSections]);

    useEffect(() => {
        // Animate the active tab indicator
        const currentIndex = tabBarSections.findIndex(tab => tab.key === routes[index]?.key);
        if (currentIndex !== -1 && tabBarSections[currentIndex]?.title) {
            let offsetX = 0;
            for (let i = 0; i < currentIndex; i++) {
                offsetX += (tabBarSections[i]?.title?.length * 10) + 20; // Approximate width + margin
            }
            const newWidth = tabBarSections[currentIndex].title.length * 10;

            Animated.parallel([
                Animated.timing(activeTabIndicatorTranslateX, {
                    toValue: offsetX,
                    duration: 300,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(activeTabIndicatorWidth, {
                    toValue: newWidth,
                    duration: 300,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [index, routes, tabBarSections]);

    const onLayout = (key, event) => {
        const { y } = event.nativeEvent.layout;
        sectionRefs.current[key] = y;
    };

    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;

        // Show/Hide tab bar with animation
        const overviewY = sectionRefs.current['overview'];
        if (overviewY !== undefined) {
            const shouldShow = scrollY >= overviewY - 50;
            if (shouldShow && !showTabBar) {
                setShowTabBar(true);
                Animated.timing(tabBarTranslateY, {
                    toValue: 0,
                    duration: 300,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true,
                }).start();
            } else if (!shouldShow && showTabBar) {
                setShowTabBar(false);
                Animated.timing(tabBarTranslateY, {
                    toValue: -50,
                    duration: 300,
                    easing: Easing.in(Easing.ease),
                    useNativeDriver: true,
                }).start();
            }
        }

        // Update current index
        let currentIndex = 0;
        tabBarSections.forEach((section, idx) => {
            const sectionY = sectionRefs.current[section.key];
            if (sectionY !== undefined && sectionY <= scrollY + layout.height / 3) { // Adjust threshold as needed
                currentIndex = idx;
            }
        });
        setIndex(currentIndex);
    };

    const scrollToSection = (key) => {
        const y = sectionRefs.current[key];
        if (y !== undefined) {
            scrollViewRef.current?.scrollTo({ y, animated: true });
            setIndex(tabBarSections.findIndex(tab => tab.key === key));
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Animated Tab Bar */}
            <Animated.View
                style={[
                    styles.tabBarContainer,
                    { transform: [{ translateY: tabBarTranslateY }] },
                ]}
            >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {tabBarSections.map((tab, i) => (
                        <TouchableOpacity
                            key={tab.key}
                            onPress={() => scrollToSection(tab.key)}
                            style={[
                                styles.tabItem,
                                index === i && styles.activeTabItem,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    index === i && styles.activeTabText,
                                ]}
                            >
                                {tab.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <Animated.View
                        style={[
                            styles.activeTabIndicator,
                            {
                                transform: [{ translateX: activeTabIndicatorTranslateX }],
                                width: activeTabIndicatorWidth,
                            },
                        ]}
                    />
                </ScrollView>
            </Animated.View>

            {/* ScrollView with Content */}
            <ScrollView
                ref={scrollViewRef}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <View>
                    <ImageBackground
                        imageStyle={styles.backgroundImage}
                        source={{
                            uri: 'https://fthmb.tqn.com/CFTKSIC-CWzZSMPenJszoSGSSAg=/3866x2578/filters:fill(ABEAC3,1)/79253051-56a794665f9b58b7d0ebdf1a.jpg',
                        }}
                    >
                        <View style={styles.backShareButtonContainer}>
                            <TouchableOpacity>
                                <FontAwesome name='chevron-left' size={25} color='white' />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <FontAwesome name='share-alt' size={25} color='white' />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.courseDetailsContainer}>
                    <Text style={styles.courseFullName}>
                        ALP Psycho Interactive Live Class & Video Solutions
                    </Text>
                    <Text style={styles.courseDescription}>
                        The last and most important stage of the RRB ALP Exam 2024 is also the toughest one
                        -RRb ALP CBT 3 - Psychometric Tests/Aptitude Test. RRB assistant loco pilot
                        psychological test is an important section of Assistant loco pilot Recruitment
                        process.
                    </Text>
                    <View style={styles.iconTextContainer}>
                        <Octicons name='checklist' color='black' size={18} />
                        <Text>3 Modules</Text>
                    </View>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name='language' color='black' size={18} />
                        <Text>Hindi, English</Text>
                    </View>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name='clock-o' color='black' size={18} />
                        <Text>Validity period 365 days</Text>
                    </View>
                </View>
                <View style={[{ paddingHorizontal: 20 }]}>
                    <Text style={styles.courseFullName}>Overview</Text>
                </View>
                <View onLayout={(e) => onLayout('overview', e)} style={styles.courseOverviewContainer}>
                    <CourseOverviewCard />
                </View>
                <View style={[{ paddingHorizontal: 20 }]}>
                    <Text style={styles.courseFullName}>Key Highlights</Text>
                </View>
                <View onLayout={(e) => onLayout('highlights', e)} style={styles.keyHighlightsContainer}>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name='check' color='green' size={15} />
                        <Text>Detailed Video Solution Available</Text>
                    </View>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name='check' color='green' size={15} />
                        <Text>T-Score (Normalization) available for all tests</Text>
                    </View>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name='check' color='green' size={15} />
                        <Text>Syllabus as per RBSO (Hindi & English)</Text>
                    </View>
                    <View style={styles.iconTextContainer}>
                        <FontAwesome name='check' color='green' size={15} />
                        <Text>Best for GDCE ALP Psycho Test</Text>
                    </View>
                </View>
                <View style={[{ paddingHorizontal: 20 }]}>
                    <Text style={styles.courseFullName}>Modules</Text>
                </View>
                <View onLayout={(e) => onLayout('modules', e)} style={styles.modulesContainer}>
                    <SingleSectionAccordion accordionData={accordionsSubSections} />
                </View>
                <View onLayout={(e) => onLayout('faqs', e)} style={[{ paddingHorizontal: 20 }]}>
                    <Text style={styles.courseFullName}>FAQs</Text>
                    <FAQsSingleSectionAccordion accordionData={faqsAccordionData} />
                </View>
                <View style={[{ paddingHorizontal: 20 }]}>
                    <Text onLayout={(e) => onLayout('creator', e)} style={styles.courseFullName}>
                        About the creator
                    </Text>
                </View>
                <View onLayout={(e) => onLayout('creator', e)} style={styles.aboutCreatorContainer}>
                    <View style={styles.creatorIconContainer}>
                        <FontAwesome name={'user'} size={100} color={'blue'} />
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Mandeep Choudhary</Text>
                </View>
                <View style={styles.rateCourseSectionContainer} >
                    <RateTheCourseSection />
                </View>
            </ScrollView>
            <View style={styles.priceBottomSheetContainer} >
                <View style={styles.priceButtonContainer} >
                    <View>
                        <Text style={styles.coursePriceWithDiscount} >1000</Text>
                        <Text style={styles.courseTotalPrice} >3000</Text>
                    </View>
                    <TouchableOpacity style={styles.buyNowButton} >
                        <Text style={styles.buyNowButtonText} >Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: 200,
    },
    backShareButtonContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    courseDetailsContainer: {
        padding: 20,
        marginTop: 150,
    },
    courseFullName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    courseDescription: {
        marginTop: 5,
    },
    iconTextContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    courseOverviewContainer: {
        padding: 20,
    },
    keyHighlightsContainer: {
        padding: 20,
    },
    modulesContainer: {
        padding: 20,
    },
    aboutCreatorContainer: {
        padding: 20,
        alignItems: 'center',
    },
    creatorIconContainer: {
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'rgba(0,102,255,0.62)',
        padding: 40,
        borderRadius: 8,
    },
    priceBottomSheetContainer: {
        backgroundColor: 'white',
        padding: 20,
    },
    priceButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    courseTotalPrice: {
        textDecorationLine: 'line-through',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    coursePriceWithDiscount: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
    buyNowButton: {
        borderRadius: 8,
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
        height: 40,
    },
    buyNowButtonText: {
        color: 'white',
    },
    tabBarContainer: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    tabItem: {
        marginRight: 20,
        paddingBottom: 5,
    },
    tabText: {
        fontSize: 16,
        color: 'gray',
    },
    activeTabText: {
        color: 'black',
        fontWeight: 'bold',
    },
    activeTabIndicator: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 2,
        backgroundColor: 'black',
        borderRadius: 1,
    },
    rateCourseSectionContainer:{
        padding:20,
    }
});
