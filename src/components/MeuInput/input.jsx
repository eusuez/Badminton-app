import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput } from 'react-native'


export const MeuInput = (props) => {
    
    const estilo = StyleSheet.create({
        input:{
            borderWidth:1,
            marginBottom:15,
            marginTop:3,
            padding:10,
            width:320,
            borderRadius:4,
            zIndex:113
            
        },
        safearea:{

        }
    })
    
    
    return(
    <View>
        <Text style={ estilo.safearea }>{ props.label }</Text>
        <TextInput style={ estilo.input }
            placeholder={ props.placeHolder }
            secureTextEntry={ props.Esconder }
        />
    </View>
    )
}




