import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomButton as Button } from '../components/Button'; // need to add alias path
import { strings } from '../constants/stringConstants';
import { StoreContext } from '../store/Store';
import { navigate } from '../utils/navigationUtils';

const Home = (): JSX.Element => {

    const [markers, setMarkers] = useState(Array(9).fill(''));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [isComputerTurn, setIsComputerTurn] = useState(false);

    const { updatePlayerScore, updateComputerScore } = useContext(StoreContext);

    const navigation = useNavigation();

    useEffect(() => {
        if (currentPlayer === 'O' && isComputerTurn && !winner) {
            setTimeout(makeComputerMove, 500);
        }
        if (winner) {
            winner === 'X' ? updatePlayerScore() : updateComputerScore();
        }
    }, [currentPlayer, winner]);


    const checkWinner = (board: string[], player: string): void => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (board[a] === player && board[b] === player && board[c] === player) {
                setWinner(player);
                break;
            }
        }

    }

    const handleMove = (index: number): void => {
        if (markers[index] === '' && !winner) {
            const updatedBoard = [...markers];
            updatedBoard[index] = currentPlayer;
            setMarkers(updatedBoard);
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
            checkWinner(updatedBoard, currentPlayer);
            setIsComputerTurn(!isComputerTurn);
        }
    };

    const makeComputerMove = (): void => {
        const availableMoves = markers.reduce((result: number[], cell: string, index: number) =>
            cell === '' ? [...result, index] : result, []
        )
        const random = Math.floor(Math.random() * availableMoves.length);
        const computerIndex = availableMoves[random];
        handleMove(computerIndex);
    }

    //need to replace Text with own custom component
    const renderCell = ({ item, index }: { item: string; index: number }): JSX.Element => (
        <TouchableOpacity
            style={styles.cell}
            onPress={() => handleMove(index)}
            disabled={item !== '' || isComputerTurn}
        >
            <Text style={styles.cellText}>{item} </Text>
        </TouchableOpacity>
    );

    const renderBoard = (): JSX.Element => (
        <FlatList
            data={markers}
            numColumns={3}
            renderItem={renderCell}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.board}
        />
    );

    const onStartGame = (): void => {
        setMarkers(Array(9).fill(''));
        setCurrentPlayer('X');
        setWinner(null);
        setIsComputerTurn(false);
    }

    const onViewScorePress = (): void => {
        navigate(navigation, 'Score');
    }

    //need to replace Text with own custom component
    const renderStatus = (): JSX.Element => {
        const winnerName = winner === 'X' ? strings.youWon : strings.cpuWon;
        const setPlayerTurn = currentPlayer === 'O' ? strings.computerTurn : strings.playerTurn;
        if (winner) {
            return <Text style={styles.statusText}>{winnerName}</Text>;
        } else if (markers.every((cell) => cell !== '')) {
            return <Text style={styles.statusText}>It's a draw!</Text>;
        } else {
            return (
                <Text style={styles.statusText}>
                    {setPlayerTurn}
                </Text>
            );
        }
    };

    //need to replace Text with own custom component
    //onPress={onViewScorePress} />
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tic Tac Toe!</Text>
            {renderBoard()}
            <View style={styles.status}>{renderStatus()}</View>
            <View style={styles.footerContainer}>
                <Button title="Start Game" onPress={onStartGame} />
                <Button title='Check Score' onPress={() => { throw new Error("Some text") }} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 44,
        color: "gray"
    },
    board: {
        paddingTop: 40,
        paddingBottom: 20
    },
    cell: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
    cellText: {
        fontSize: 48
    },
    status: {
        marginBottom: 40
    },
    statusText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    footerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
export default Home;