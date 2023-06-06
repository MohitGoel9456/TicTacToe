import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { StoreContext } from "../store/Store";

const ScoreScreen = (): JSX.Element => {
    const { playerScore, computerScore } = useContext(StoreContext);

    return (
        <View style={styles.container}>
            <Text>Your score is {playerScore}</Text>
            <Text>Computer score is {computerScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
})

export default ScoreScreen;