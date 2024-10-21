import React from "react";
import { View, TextInput, Text, ImageBackground, TouchableOpacity, SafeAreaView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { estilo } from "./style";

export const Criarconta02 = () => {
    return(
        <View style={estilo.container}>
            <LinearGradient 
            start={{x: 1, y: 1}} 
            end={{x: -1, y: -1}} 
            colors={['#000000', '#2e2e2e']} 
            style={estilo.linearGradientBackground}
            >
                <View style={estilo.container_pg2}>
                    <Text
                    style={estilo.titulo_pg2}
                    >Crie sua conta</Text>

                    <TextInput
                    style={estilo.input}
                    placeholder="Seu nome"
                    />

                    <TextInput
                    style={estilo.input}
                    placeholder="Email"
                    />

                    <TextInput
                    style={estilo.input}
                    placeholder="Senha"
                    />
                </View>
                <View style={estilo.container}>
                    <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={['#4376e6', '#0233a1']} 
                    style={estilo.linearGradientButton_pg2}
                    >
                        <TouchableOpacity style={estilo.button_pg2}>
                            <Text style={estilo.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View>
                    <Text></Text>
                </View>
            </LinearGradient>
        </View>
    );
}
