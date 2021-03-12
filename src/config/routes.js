import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Request from '../screens/Request';
import Indications from '../screens/Indications';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Home")
                        iconName = 'home'

                    else if (route.name === "Requests")
                        iconName = "tag"

                    else if (route.name === "Indications")
                        iconName = "activity"

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
            initialRouteName={"Home"}
        >
            <Tab.Screen name="Requests" component={Request} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Indications" component={Indications} />
            
        </Tab.Navigator>
    )
}

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}