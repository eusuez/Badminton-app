import { StyleSheet } from "react-native"

export const estilo = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'center'
    },
    container:{
        flex: 1
    },
    linearGradient: {
        flex:1,
        justifyContent: 'center',
        textAlign:'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    button: {
        padding: 0,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 35,
        backgroundColor: 'transparent',
        height: 45,
        width: 300,
        alignSelf: "center",
        top: 300
    }
})