import React from "react";
import { View, Text, TextInput, ImageBackground, TouchableOpacity, SafeAreaView, StyleSheet} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { estilo } from "./style";
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export const RealLogin = () =>{
    let [fontsLoaded] = useFonts({
        BebasNeue_400Regular,
      });

    let estilo = StyleSheet.create({
        overall:{
            display:"flex",
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"rgb(27,27,27)",
        },
        titulo:{
            color:"white",
            fontWeight:"bold",
            fontSize:"30px",
            marginBottom:"50px",
        },
        entrada:{
            color:"white",
            borderBottomColor:"white",
            borderBottomWidth:"1px",
            paddingBottom:"7px",
            paddingTop:"7px",
            paddingRight:"100px",
            paddingLeft:"10px",
            fontSize:"17px",
            marginBottom:"40px",
        },

        linearGradient: {
            alignSelf: 'center',
            borderRadius: 35,
            height: 43,
            width: 300,
            justifyContent: 'center',
        },

        button:{
            display:"flex",
            backgroundColor: 'transparent',
            borderRadius: 35,
            borderColor: 'transparent',
            alignItems: 'center',
            alignSelf: 'center',
            height: 45,
            width: 300,
            padding: 10,

        }
    })
    return(
        
        <View style={estilo.overall}>

            <Text style={estilo.titulo}>LOGIN</Text>
            <TextInput placeholder="Email" style={estilo.entrada}></TextInput>
            <TextInput placeholder="Senha" style={estilo.entrada}></TextInput>
            <SafeAreaView style={{display:"flex", marginTop:"5rem"}}>
                <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={['#4376e6', '#0233a1']} 
                style={estilo.linearGradient}
                >
                    <TouchableOpacity style={estilo.button}>
                        <Text style={{fontWeight:"bold",alignItems:"center",color:"white",fontSize:"22px",fontFamily: 'BebasNeue_400Regular'}}>Entrar</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </SafeAreaView>
        </View>
    )
}