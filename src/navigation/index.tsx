import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ScoreScreen from '../screens/ScoreScreen';

const Stack = createNativeStackNavigator();


const StackNavigator = (props: any) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Score" component={ScoreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;