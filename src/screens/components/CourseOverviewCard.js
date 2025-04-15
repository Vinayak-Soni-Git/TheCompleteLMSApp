import {StyleSheet, Text, View} from "react-native";

const OverviewSubHeading = ({index, text}) => {
    return (
        <View style={styles.overviewSubHeadingContainer}>
            <Text style={styles.overviewSubHeadingIndex}>{index}.</Text>
            <Text style={styles.overviewSubHeadingText}>{text}</Text>
        </View>
    )
}

const OverviewLine = ({index, text}) => {
    return (
        <View style={styles.overviewLineContainer}>
            <Text>({index}.)</Text>
            <Text style={styles.overviewLineText}>{text}</Text>
        </View>
    )
}

export default function CourseOverviewCard() {
    return(
        <View style={styles.overviewDescriptionContainer} >
            <Text>##Score card available with T-Score 42 marks (normalization) and 42% for all test and
                battery (sections).</Text>
            <Text style={[{fontWeight: 'bold'}]}>Syllabus as per RDSO (Hindi & English)</Text>
            <OverviewSubHeading index={'1'} text={'Memory Test:- (05 Types)'}/>
            <OverviewLine index={'1a'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewLine index={'1b'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewLine index={'1c'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewLine index={'1d'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewLine index={'1e'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewSubHeading index={'2'} text={'Memory Test:- (05 Types)'}/>
            <OverviewLine index={'2a'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewLine index={'2b'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewLine index={'2c'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewLine index={'2d'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewLine index={'2e'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewSubHeading index={'3'} text={'Memory Test:- (05 Types)'}/>
            <OverviewLine index={'2a'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewLine index={'2b'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>


            <OverviewSubHeading index={'4'} text={'Memory Test:- (05 Types)'}/>
            <OverviewLine index={'2a'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

            <OverviewLine index={'2b'}
                          text={'House Memory Test / Building Memory Test (Question 12+12=24) (Time 04+04=08M)'}/>

        </View>
    )
}

const styles = StyleSheet.create({
    overviewDescriptionContainer: {
        backgroundColor: '#ddeafa',
        padding: 10,
    },
    overviewLineContainer: {
        marginTop: 5,
        flexDirection: 'row',
        gap: 5,
    },
    overviewSubHeadingContainer: {
        marginTop: 5,
        flexDirection: 'row',
        gap: 5,
    },
    overviewSubHeadingIndex: {
        fontWeight: 'bold'
    },
    overviewSubHeadingText: {
        fontWeight: 'bold',
        width: '90%',
    },
    overviewLineText: {
        width: '90%',
    },
})
