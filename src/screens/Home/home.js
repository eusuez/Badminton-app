import React from 'react';
import { Text } from 'react-native';
import botaoAna from "./botaoAna.png";
import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import MeuInput from "../../components/MeuInput/input.js";
import lupa from "../../../assets/lupa.png"
import filtro from "../../../assets/filtro.png"
import { useFonts, 
  BalooTammudu2_400Regular,
  BalooTammudu2_500Medium,
  BalooTammudu2_600SemiBold,
  BalooTammudu2_700Bold,
  BalooTammudu2_800ExtraBold } from "@expo-google-fonts/baloo-tammudu-2"

//backgroundColor:'#BF4A08''#C06E1A',


export const Home = ({navigation}) =>{
  const estilos = StyleSheet.create({
    titulo:{
      
      //@import "~@openfonts/baloo-tammudu-2_latin/index.css";

      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      /*
      fontFamily:'Baloo Tammudu Regular',
      */
      textAlign:'center',
      fontFamily: 'BalooTammudu2_700Bold',
      fontSize:34,  
      fontWeight:400,
      color:"#FFFFFF",
      marginTop:37,
      height:0,
    },
    subTitulo:{
      display:'flex',
      justifyContent:'center',
      textAlign:'center',

      /*
      fontFamily:'Baloo Tammudu Regular',
      */
      
      fontFamily: 'BalooTammudu2_700Bold',
      fontSize:24,  
      fontWeight:400,
      color:'rgb(255,162,132)',
      height:0,
      marginBottom:40,

    },
    fundo:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 370,
    },
    card:{
      display:"flex",
      width:158,
      height:239  ,
      backgroundColor:"#FFF6F1",
      marginRight:10
    },
    card2:{
      display:"flex",
      width:158,
      height:239  ,
      backgroundColor:"#FFF6F1",

    }, 
    sliding:{
      backgroundColor:'#FFFFFF',
      marginTop:20,
      height:16,
      width:327,
      borderRadius:23,
    },
    inputPesquisa:{

      width:255,
      height:44,
      borderRadius:20

    },
    overhalf:{

      marginTop:18,
      height:500,
    },
    novos:{
      display:'flex',
      justifyContent:'flex-start',
      marginLeft:30,
      fontFamily: 'BalooTammudu2_700Bold',
      fontSize:24,  
      fontWeight:400,
      color:'#853000',
    },
    card3:{
      width:131,
      height:182,
      backgroundColor:'#FFF6F1',
      marginLeft:20
    },
    card4:{
      width:131,
      height:182,
      backgroundColor:'#FFF6F1',
    }
  })
  let [fontsLoaded] = useFonts({
    BalooTammudu2_400Regular,
    BalooTammudu2_500Medium,
    BalooTammudu2_600SemiBold,
    BalooTammudu2_700Bold,
    BalooTammudu2_800ExtraBold,
  });
  return(
    <View>
      <View style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#BF4A08', '#C06E1A']} style={estilos.fundo}>
        </LinearGradient>
        <Text style={estilos.titulo}>POPULARES</Text>
        <Text style={estilos.subTitulo}>essa semana</Text>
        
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
          <View style={estilos.card}>

          </View>

          <View style={estilos.card2}>

          </View>



        </View>

        <View style={{display:'flex'}}>
            <View style={estilos.sliding}>
            </View> 
          </View>

      </View>


      <LinearGradient colors={['#FFE5D7', '#FFC29F'] } 
      style={estilos.overhalf}>
        <View style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
          <LinearGradient colors={['#F05C08', '#923B0A']} style={{marginTop:20,borderRadius:20, paddingLeft:50, outline: 'none'}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          >
              <Image source={lupa} style={{position:'absolute', top:7, left:10}}/>
              <Image source={filtro} style={{position:'absolute', top:8, left:265}}/>
              <TextInput style={estilos.inputPesquisa}></TextInput>
            </LinearGradient>
        </View>
        
        <View>
          <Text style={estilos.novos}>Novos</Text>
        </View>

        <View style={estilos.card3}>

        </View>

      </LinearGradient>


    </View>
  )
}

