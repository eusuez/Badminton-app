import { StyleSheet } from "react-native"

export const estilo = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        background: {
            backgroundColor: '#1c1c1e',
            flex: 1,
            width: 'auto',
            height: 'auto'
        },
        BuscaConatainer:{
            flexDirection: 'row',
            alignSelf: "center",
            height: 47,
            width: '90%',
            backgroundColor: '#272727',
            borderRadius: 10,
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            top: 90

        },
        input:{
            alignItems: 'center',
            color: '#909090',
            width: "60%",
            height: 'auto',
            fontSize: 15,
        },
        iconBuscar:{
            padding: 10
        },
        separator:{
            backgroundColor: '#343434',
            width: 1,
            height: 33

        },
        iconLight:{
            padding: 15,
            paddingLeft: 25
        },
        iconBell:{
            padding: 15,
        }
        
})