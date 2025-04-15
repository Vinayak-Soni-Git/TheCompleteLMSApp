import {View, StyleSheet, StatusBar} from 'react-native';
import RootNavigator from './src/navigator/RootNavigator';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <RootNavigator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
