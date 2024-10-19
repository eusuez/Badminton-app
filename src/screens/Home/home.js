import React from "react";
import { ScrollView, View, SafeAreaView, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { estilo } from "../style";
import Icon from 'react-native-vector-icons/FontAwesome5.js';

export const Home = () => {
    return (
        <SafeAreaView style={estilo.background}>
            <View style={estilo.BuscaConatainer}>
                <Icon style={estilo.iconBuscar} name="search" size={14} color="#909090"/>
                <TextInput
                style={estilo.input}
                placeholder="Pesquisa"
                placeholderTextColor={'#909090'}></TextInput>
                <View style={estilo.separator}></View>
                <Icon style={estilo.iconLight} name="lightbulb" size={15} color="#909090"/>
                <Icon style={estilo.iconBell} name="bell" size={15} color="#909090"/>
            </View>
        </SafeAreaView>

    );
}




