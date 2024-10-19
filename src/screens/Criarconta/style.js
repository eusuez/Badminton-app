import { StyleSheet } from "react-native"

export const estilo = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'center'
    },
    linearGradientBackground: {
        flex: 1,
        justifyContent: 'center',
        width: 'auto',
        height: 'auto'
    },
    logo: {
        flex: 1,
        justifyContent: 'center'
    },
    container:{
        flex: 1
    },
    container_pg2:{
        flex: 1,
        alignSelf: "center",
        width: "85%",
        top: 200
    },
    container2:{
        justifyContent: 'center',
    },
    linearGradientButton: {
        alignSelf: 'center',
        borderRadius: 35,
        height: 43,
        width: 300,
        justifyContent: 'center',
        top: 220
    },
    linearGradientButton_pg2: {
        alignSelf: 'center',
        borderRadius: 35,
        height: 43,
        width: 300,
        justifyContent: 'center',
        top: 200
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 35,
        borderColor: 'transparent',
        alignItems: 'center',
        alignSelf: 'center',
        height: 45,
        width: 300,
        padding: 10
    },
    button_pg2: {
        backgroundColor: 'transparent',
        borderRadius: 35,
        borderColor: 'transparent',
        alignItems: 'center',
        alignSelf: 'center',
        height: 45,
        width: 300,
        padding: 10
    },
    buttonText: {
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white',
        fontSize: 18,
    },
    titulo:{
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        top: 190
    },
    titulo_pg2:{
        fontWeight: 'bold',
        alignItems: 'left',
        color: 'white',
        fontSize: 25,
        textAlign: 'left',
        marginBottom: 10
    },
    input:{
        fontSize: 12,
        marginBottom: 15,
        marginTop: 15,
        borderBottomWidth: 1,
        borderColor: "white",
        paddingBottom: 10,
        color: 'white',
        textTransform: 'capitalize'
    }
    
})