import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StoreContext } from "../..//store/Store";
import backImage from '../../assets/back.png';

const ScoreScreen = (): JSX.Element => {
    const { playerScore, computerScore } = useContext(StoreContext);
    const navigation = useNavigation();

    const onBackPress = (): void => {
        navigation.goBack();
    }

    const renderHeader = (): JSX.Element => {
        return (
            <View style={styles.headerContainer}>
                <Pressable onPress={onBackPress}>
                    <Image
                        style={styles.tinyLogo}
                        source={backImage}
                    />
                </Pressable>
            </View>
        )
    }

    return (
        <View>
            {renderHeader()}
            <View style={styles.container}>
                <Text>Your score is {playerScore}</Text>
                <Text>Computer score is {computerScore}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    headerContainer: {
        height: 48,  //need to handle this
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 16,
        height: 16,
    },
})

export default ScoreScreen;