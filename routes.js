import React from 'react';
import { LoginPt3 } from './src/screens/Login/login-pt3.js';
import { RealLogin } from './src/screens/Login/real-login.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
        </Stack.Navigator>
    )
}
