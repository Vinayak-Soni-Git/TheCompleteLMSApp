import {Dimensions, Image, StyleSheet, View} from 'react-native';

const { width } = Dimensions.get('window');
export default function OfferCard({offer}){
    return (
        <View style={styles.offerCardContainer} >
            <Image style={styles.image} src={offer.offerPoster} />
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:width * 0.9,
        height:200,
        borderRadius:8,
    },
    offerCardContainer:{
        marginRight:5,
    },
});
