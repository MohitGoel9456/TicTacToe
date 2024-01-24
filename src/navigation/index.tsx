import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/TicTacToe/Home';
import ScoreScreen from '../screens/TicTacToe/ScoreScreen';
import Dashboard from '../screens/Home';

const Stack = createNativeStackNavigator();


const StackNavigator = (props: any) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard" screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Score" component={ScoreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;