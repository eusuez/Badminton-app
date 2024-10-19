import React from "react";
import { ScrollView, View, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { estilo } from "../style";

export default function TreinosScreen() {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLagerTitle: true,
            headerSearchOptions: {
                placeholder: "Search",
            },
        });
    }, [navigation]);
    return (
        <ScrollView contentContainerStyle={estilo.container}>
            <Text style={estilo.font}>!!!!!!!!!!!OLHA AI CARALHO!!!!!!!!!!</Text>
        </ScrollView>
    );
}