import * as Progress from 'react-native-progress';
import {FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import TestAnalysisCard from '../components/TestAnalysisCard';
import GiftedBarChart from './charts/GiftedBarChart';
import GiftedDotChart from './charts/GiftedDotChart';
import GiftedDonutChart from './charts/GiftedDonutCharts';
import MyExamCard from '../components/MyExamCard';
import LearningAnalysisCard from '../components/LearningAnalysisCard';
import LearningAnalysisCard2 from '../components/LearningAnalysisCard2';
import {globalStyles} from '../../global/GlobalStyles';
import {FireIcon, PiggyBankIcon, SleepingStudentIcon} from '../../constants/ImagesAndIcons';
import {analysisCard2Data, analysisCardData, myExamData, testAnalysisCardsData} from '../../constants/UIData';

export default function Analysis() {
    const [selectedValue, setSelectedValue] = useState(null);
    return (
        <View style={styles.container}>
            <View>
                <RNPickerSelect
                    onValueChange={(value) => setSelectedValue(value)}
                    items={[
                        { label: 'Option 1', value: 'option1' },
                        { label: 'Option 2', value: 'option2' },
                        { label: 'Option 3', value: 'option3' },
                    ]}
                    style={{
                        inputAndroid: {
                            width:150,
                            color: selectedValue ? 'black' : 'gray',
                            backgroundColor: selectedValue ? '#dff0d8' : 'white',
                            borderRadius: 50,
                            borderColor: selectedValue ? 'green' : 'gray',
                        },
                        inputIOS: {
                            width:150,
                            color: selectedValue ? 'black' : 'gray',
                            backgroundColor: selectedValue ? '#dff0d8' : 'white',
                            borderRadius: 50,
                            borderColor: selectedValue ? 'green' : 'gray',
                        },
                        placeholder: {
                            color: 'gray',
                        },
                    }}
                    placeholder={{ label: 'All Courses', value: null }}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View>
                    <FlatList
                        data={testAnalysisCardsData}
                        keyExtractor={(item) => item.id}
                        renderItem={({item})=>(
                            <TestAnalysisCard analysisCard={item} />
                        )} />

                </View>

                <View style={styles.myExamExploreAllButtonContainer}>
                    <Text style={styles.myExamsText}>My Exams</Text>
                    <Pressable>
                        <Text style={styles.exploreAllButtonText}>Explore All</Text>
                    </Pressable>
                </View>
                <View style={styles.MyExamCardFlatListContainer}>
                    <FlatList
                        data={myExamData}
                        keyExtractor={(index) => index.toString()}
                        renderItem={({item}) => (
                            <MyExamCard exam={item}/>
                        )}/>
                </View>

                <View >
                    <View style={styles.TestQuestionsAnalysisTextContainer}>
                        <Text style={styles.myExamsText}>Test Questions Analysis</Text>
                    </View>

                    <GiftedDonutChart />

                    <View style={styles.changeOfScoreTextContainer}>
                        <Text style={styles.myExamsText}>Change of score with each test</Text>
                    </View>
                    <GiftedDotChart />

                    <View style={styles.headingWithPaddingText}>
                        <Text style={styles.myExamsText}>Change of Percentile & Accuracy with each test</Text>
                    </View>

                    <GiftedBarChart />
                </View>

                <View style={styles.headingWithPaddingText}>
                    <Text style={styles.myExamsText}>Learning Analysis</Text>
                </View>
                <View style={styles.headingWithPaddingText}>
                    <View style={styles.videosViewedTestAttemptedCardsContainer}>
                        {analysisCardData.map((item) => (
                            <LearningAnalysisCard item={item}/>
                        ))}
                    </View>
                    <View style={[styles.totalLearningTimeStreakContainer, { marginTop:10 }]}>
                        {analysisCard2Data.map((item) => (
                            <LearningAnalysisCard2 item={item}/>
                        ))}
                    </View>
                    <View styles={styles.headingWithPaddingText}>
                        <Pressable style={styles.viewDetailedAnalysisButton}>
                            <Text style={styles.viewDetailedAnalysisButtonText}>View Your Detailed Analysis</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.testAnalysisTextContainer}>
                    <Text style={styles.myExamsText}>Test Analysis</Text>
                </View>

                <View style={styles.studentSleepingIconAttemptTextButtonContainer}>
                    <View style={styles.studentSleepingIconContainer} >

                        <Image style={styles.studentSleepingIcon}
                               source={SleepingStudentIcon}/>
                    </View>
                    <Text style={styles.notAttemptedText}>You haven't attempted any Tests</Text>
                    <Text style={styles.notAttemptedText}>Click below to see all available Unattempted Tests</Text>
                    <Pressable style={[styles.attemptATestButton, {marginTop:10}]}>
                        <Text style={styles.attemptATestButtonText}>Attempt a Test</Text>
                    </Pressable>
                </View>
                <View style={styles.headingWithPaddingText}>
                    <Text style={styles.myExamsText}>Insights</Text>
                </View>
                <View style={styles.theGoodToImproveSummaryTextContainer} >
                    <Text style={styles.theGoodText} >The Good</Text>
                    <View style={styles.improveInstructionsContainer} >
                        <Text style={styles.instructionBulletPoint} >{'\u2022'}</Text>
                        <Text style={styles.improveInstructionText} > Your are a quick thicker. you are taking
                        only 2 seconds per questions</Text>
                    </View>

                    <Text style={styles.toImproveText} >To Improve</Text>
                    <View style={styles.improveInstructionsContainer} >
                        <Text style={styles.instructionBulletPoint} >{'\u2022'}</Text>
                        <Text style={styles.improveInstructionText} >You have only viewed 2 docs & videos.Reading and watching
                        useful videos will only make you smarter, try spending more time on learning and see yourself improve!</Text>
                    </View>
                    <View style={styles.improveInstructionsContainer} >
                        <Text style={styles.instructionBulletPoint} >{'\u2022'}</Text>
                        <Text style={styles.improveInstructionText} >You have only viewed 2 docs & videos.Reading and watching
                            useful videos will only make you smarter, try spending more time on learning and see yourself improve!</Text>
                    </View>
                    <View style={styles.improveInstructionsContainer} >
                        <Text style={styles.instructionBulletPoint} >{'\u2022'}</Text>
                        <Text style={styles.improveInstructionText} >You have only viewed 2 docs & videos.Reading and watching
                            useful videos will only make you smarter, try spending more time on learning and see yourself improve!</Text>
                    </View>
                </View>
                <View style={styles.totalSOEMoneyContainer} >
                    <View style={styles.textMoneyPiggyBankIconContainer} >
                        <View >
                            <Text style={styles.totalSoeMoneyText} >Total SOE Money</Text>
                            <Text style={styles.totalSoeMoney} >150</Text>
                        </View>
                        <Image style={styles.piggyBankIcon} source={PiggyBankIcon} />
                    </View>
                    <Pressable style={[styles.attemptATestButton, {marginTop:10}]}>
                        <Text style={styles.attemptATestButtonText}>Apply</Text>
                    </Pressable>
                </View>

                <View style={styles.todayStreakProgressContainer}>
                    <View style={styles.fireIconTextContainer}>
                        <View style={styles.fireIconContainer}>
                            <Image source={FireIcon} style={styles.fireImage}/>
                        </View>
                        <View>
                            <Text style={styles.streakProgressText}>Today's Streak Progress</Text>
                            <Text style={styles.studyTimeAdviseText}>Study 10 Minutes daily to build your Steak</Text>
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
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    myExamExploreAllButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
    },
    myExamsText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    exploreAllButtonText: {
        fontSize: 15,
    },
    videosViewedTestAttemptedCardsContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    totalLearningTimeStreakContainer: {
        gap: 5,
    },
    viewDetailedAnalysisButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    viewDetailedAnalysisButtonText: {
        color: 'white',
    },
    studentSleepingIconAttemptTextButtonContainer: {
        alignItems: 'center',
    },
    studentSleepingIcon: {
        width: 120,
        height: 120,
    },
    notAttemptedText: {
        color: 'gray',
        fontSize: 15,
    },
    studentSleepingIconContainer:{
        width:'100%',
        padding:15,
        borderRadius:4,
        backgroundColor:'#e0e8f3',
        alignItems:'center',
    },
    attemptATestButton:{
        width:'100%',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    attemptATestButtonText:{
        color:'white',
    },
    toImproveText:{
        fontSize:16,
        color:'red',
        fontWeight:'bold',
    },
    theGoodText:{
        fontSize:16,
        color:'green',
        fontWeight:'bold',
    },
    improveInstructionsContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        padding:10,
    },
    instructionBulletPoint:{
        fontSize:28,
        fontWeight:'bold',
        lineHeight:18,
    },
    improveInstructionText:{
        fontWeight:'bold',
        lineHeight:18,
    },
    textMoneyPiggyBankIconContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    piggyBankIcon:{
        width:80,
        height:80,
    },
    totalSOEMoneyContainer:{
        padding:10,
        backgroundColor:'white',
        elevation:5,
        borderRadius:8,
        marginTop:10,
    },
    totalSoeMoney:{
        color:'black',
        fontSize:28,
    },
    totalSoeMoneyText:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
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
    MyExamCardFlatListContainer:{
        marginTop:10,
    },
    TestQuestionsAnalysisTextContainer:{
        marginTop:10,
    },
    changeOfScoreTextContainer:{
        marginTop:10,
    },
    theGoodToImproveSummaryTextContainer:{
        marginTop:10,
    },
    testAnalysisTextContainer:{
        marginTop:10,
    },
    headingWithPaddingText:{
        marginTop:10,
    },

});
