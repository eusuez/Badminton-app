import React from "react";
import { SafeAreaView, Alert, View, Text, ImageBackground, Pressable} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { estilo } from "./style";
import { MeuButton } from "../../components/MeuButton/button";

export const LoginPt3 = () => {
    return(
        <View style={estilo.container}>
            <ImageBackground 
            source={'../../../assets/DSC_7170.jpg'}
            resizeMode="cover" 
            style={estilo.background}>
                <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={['#4376e6', '#0233a1']} 
                style={estilo.button}
                > 
                    <Text style={estilo.buttonText}>Inicie seus treinos</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}
