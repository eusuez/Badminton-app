import React from "react";
import { StyleSheet, Text} from "react-native";
import { TouchableOpacity} from "react-native";

export const MeuButton = (props) => {
    const estilo = StyleSheet.create({
        botao:{
            backgroundColor:'#6558f5',
            borderRadius:15,
            padding:7.5
        }
    })
    
    
    return(
        <TouchableOpacity onPress={ props.onclick }>
            <Text>{ props.value }</Text>
        </TouchableOpacity>
    )
}
