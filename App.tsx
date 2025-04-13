import {View, StyleSheet} from 'react-native';
import RootNavigator from './src/navigator/RootNavigator';

export default function App() {
    return (
        <View style={styles.container}>
            <RootNavigator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
