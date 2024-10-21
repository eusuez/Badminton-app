import React from 'react';
import { LoginPt3 } from './src/screens/Login/login-pt3.js';
import { RealLogin } from './src/screens/Login/real-login.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TreinosScreen from './src/screens/Treinos/index.js';
import DesafiosScreen from './src/screens/Desafios/index.js';
import PerfilScreen from './src/screens/Perfil/index.js';
import { Home } from './src/screens/Home/home.js';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();



export const TabNavigate = () =>{
    return(
        <Tab.Navigator initialRouteName='Home'
          activeColor="#ccc"
          barStyle={{ backgroundColor: 'rgb(28,28,30)' }}
        >


            <Tab.Screen
            name='Home'
            component={ Home }
            options={{
                headerShown:false,
                tabBarIcon: () => <Icon name="home" size={20} color="#909090"/>,

            }}
            />

            <Tab.Screen
              name="Treinos"
              component={ TreinosScreen }
              options={{
                headerShown:false,
                tabBarIcon: () => <Icon name="stopwatch" size={20} color="#909090"/>,
              }}
            />

            <Tab.Screen
            name='Desafios'
            component={DesafiosScreen}
            options={{
                headerShown:false,
                tabBarIcon: () => <Icon name="fire-alt" size={20} color="#909090"/>
            }}
            />

            <Tab.Screen
            name='Perfil'
            component={PerfilScreen}
            options={{
                headerShown:false,
                tabBarIcon: () => <Icon name="user" size={20} color="#909090"/>
            }}
            />

        </Tab.Navigator>
    )
}

export const StackNavigate = () =>{
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                component={ RealLogin }
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen
            name="Home"
            component={ TabNavigate }
            options={{
              headerShown:false
            }}
            />


        </Stack.Navigator>
    )
}

