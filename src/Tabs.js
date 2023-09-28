import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../src/screens/HomeScreen';
import CadastroScreen from './screens/CadastroScreen';
import LoginScreen from '../src/screens/LoginScreen';
import TransacoesScreen from '../src/screens/TransacoesScreen';
import PerfilScreen from '../src/screens/PerfilScreen';

const Tabs = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                labelStyle: {
                    fontFamily: 'Inter-Regular'
                },
                tabBarStyle: {
                    backgroundColor: '#008000'
                },
                tabBarActiveTintColor: '#fff', 
                tabBarInactiveTintColor: '#fff'
            }}
            initialRouteName="HomeScreen"
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Minhas Transações"
                component={TransacoesScreen}
                options={{
                    tabBarLabel: 'Minhas transações',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='cash' color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='account-circle' color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Opcoes' component={Tabs} />
            <Stack.Screen name='Cadastro' component={CadastroScreen} />
        </Stack.Navigator>
    );
};
