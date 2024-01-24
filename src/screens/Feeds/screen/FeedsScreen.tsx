import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const FeedsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is Feed screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    }
})

export default FeedsScreen;