import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import React from 'react';

export default function PackagePlanCard({plan, selectedPlan, setSelectedPlan}){
    return(
        <Pressable style={[styles.plan, selectedPlan === plan.id && styles.selectedPlan]}
                   onPress={() => setSelectedPlan(plan.id)}>
            {plan.bestValue && <Text style={styles.bestValue}>BEST VALUE</Text>}
            <View style={styles.planDetails}>
                <RadioButton.Android value={plan.id}
                                     status={selectedPlan === plan.id ? 'checked' : 'unchecked'}
                                     onPress={() => setSelectedPlan(plan.id)}/>
                <View>
                    <Text style={styles.planTitle}>{plan.duration}</Text>
                    <Text style={styles.validity}>{plan.validity}</Text>
                </View>
            </View>
            <View style={styles.priceSection}>
                <Text style={styles.oldPrice}>{plan.oldPrice}</Text>
                <Text style={styles.price}>{plan.price}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    plan: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    selectedPlan: {
        borderColor: '#007bff',
        backgroundColor: '#f0f8ff'
    },
    bestValue: {
        position: 'absolute',
        top: -10,
        left: 10,
        backgroundColor: 'orange',
        padding: 5,
        borderRadius: 5,
        fontSize: 10,
        color: '#fff'
    },
    planDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    planTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    validity: {
        fontSize: 12,
        color: 'gray'
    },
    priceSection: {
        alignItems: 'flex-end'
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        color: 'gray',
        fontSize: 12
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})
