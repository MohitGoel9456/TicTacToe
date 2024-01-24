import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { getWidth } from '../../utils/deviceConfigUtils';
import { useNavigation } from '@react-navigation/native';
import { navigate } from '../../utils/navigationUtils';

const Dashboard = (): React.ReactElement => {
    const navigation = useNavigation();

    const card = (title: string, handleOnClick: () => void): JSX.Element => {
        return (
            <TouchableOpacity style={styles.cardContainer} onPress={handleOnClick}>
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }

    const handleOnTicTacToeClick = () => {
        navigate(navigation, 'Home');
    }

    const handleOnFeedsClick = () => {
        navigate(navigation, 'FeedScreen');
    }

    return (
        <View style={styles.container}>
            {card('TicTacToe', handleOnTicTacToeClick)}
            {card('Instagram', handleOnFeedsClick)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        flex: 1,
        backgroundColor: 'white'
    },
    cardContainer: {
        width: getWidth() / 2 - 24,
        height: getWidth() / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }
})

export default Dashboard;