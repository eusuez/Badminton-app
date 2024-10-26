import React from "react";
import { View, Text, TextInput, ImageBackground, TouchableOpacity, SafeAreaView, StyleSheet, Alert, Button} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { estilo } from "./style";
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export const RealLogin = ({navigation}) =>{
    let [fontsLoaded] = useFonts({
        BebasNeue_400Regular,
      });

    const [email, onChangeEmail] = React.useState('');
    const [senha, onChangeSenha] = React.useState('');



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
            fontSize:30,
            marginBottom:50,
        },
        entrada:{
            color:"white",
            borderBottomColor:"white",
            borderBottomWidth:1,
            paddingBottom:7,
            paddingTop:7,
            paddingRight:100,
            paddingLeft:10,
            fontSize:17,
            marginBottom:40,
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

    const showAlert = () => {
      alert(
        "Usuário ou Senha incorreto"
      );
    };


    return(

        <View style={estilo.overall}>

            <Text style={estilo.titulo}>LOGIN</Text>
            <TextInput placeholder="Email" style={estilo.entrada} onChangeText={onChangeEmail} value={email}></TextInput>
            <TextInput placeholder="Senha" style={estilo.entrada} onChangeText={onChangeSenha} value={senha}></TextInput>
            <SafeAreaView style={{display:"flex", marginTop:"5rem"}}>
                <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#4376e6', '#0233a1']}
                style={estilo.linearGradient}
                >
                    <TouchableOpacity style={estilo.button} onPress={() => {
                      if(email.toLowerCase() != "alexandre@gmail.com" || senha != "244466666"){
                        showAlert()
                      }else{
                        navigation.navigate("Home")
                      }

                    }}>
                        <Text style={{fontWeight:"bold",alignItems:"center",color:"white",fontSize:22,fontFamily: 'BebasNeue_400Regular'}}>Entrar</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </SafeAreaView>
        </View>
    )
}


