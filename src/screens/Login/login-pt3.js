import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { estilo } from "./style";
import { Image } from "expo-image";

export const LoginPt3 = () => {
    return(
        <View style={estilo.container}>
            <ImageBackground 
            source={'../../../assets/WhatsApp Image 2024-08-25 at 16.11.54.jpeg'}
            resizeMode="cover" 
            style={estilo.background}> 
                <View>
                    <Text>oi</Text>
                </View>
                <View>
                    <Text style={estilo.titulo}>APLICATIVO {'\n'}BADBONS</Text>
                </View>
                <SafeAreaView style={estilo.container2}>
                    <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={['#4376e6', '#0233a1']} 
                    style={estilo.linearGradient}
                    >
                        <TouchableOpacity style={estilo.button}>
                            <Text style={estilo.buttonText}>Inicie seus treinos</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
