import React from "react";
import { StyleSheet, Text} from "react-native";
import { TouchableOpacity} from "react-native";

export const MeuButton = (props) => {
    return(
        <TouchableOpacity onPress={ props.onclick }>
            <Text>{ props.value }</Text>
        </TouchableOpacity>
    )
}
