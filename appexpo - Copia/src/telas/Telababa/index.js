import React from "react";
import { 
    Text,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from '@react-navigation/native'

export default function Telababa() {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <Image
            source={require('../../Imagens/Login.png')}
            style={{ width: '100%', height: '100%', opacity: 0.8}}
            />
            <Image
            source={require('../../Imagens/logo baba preta.png')}
            style={styles.logo}
            />
            <ScrollView style={styles.scrow}>
            <Text style={styles.textocadastro}> Dados Pessoais </Text>
            <Text style={styles.textoemail}> Escreva seu Nome Completo: </Text>
            <TextInput style={styles.inputemail} 
            placeholder="Nome Completo"
            />
            <Text style={styles.textoidade}> Digite sua Idade: </Text> 
            <TextInput style={styles.inputidade}
            placeholder="Idade"
            />
            <Text style={styles.textogenero}> Qual seu Gênero: </Text> 
            <TextInput style={styles.inputgenero}
            />
            <Text style={styles.textoemail}> Digite seu RG: </Text> 
            <TextInput style={styles.inputemail}
            placeholder="XX.XXX.XXX-X"
            />
            <Text style={styles.textoemail}> Digite seu CPF: </Text> 
            <TextInput style={styles.inputemail}
            placeholder="XXX.XXX.XXX-XX"
            />
            <Text style={styles.textoemail}> Digite um E-mail: </Text> 
            <TextInput style={styles.inputemail}
            placeholder="E-mail"
            />
            <Text style={styles.textoemail}> Confirme seu E-mail: </Text> 
            <TextInput style={styles.inputemail}
            placeholder="Confirmar"
            />
            <Text style={styles.textoemail}> Digite uma Senha: </Text> 
            <TextInput style={styles.inputemail}
            placeholder="Senha"
            />
            <Text style={styles.textosenha}> Confirme sua Senha: </Text> 
            <TextInput style={styles.inputsenha}
            placeholder="Confirmar"
            />
            <TouchableOpacity style={styles.botaoavanço} onPress={ () => navigation.navigate('Cadastrotrabalho')}>
            <Text style={styles.avanço}> Avançar </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaovoltar} onPress={ () => navigation.navigate('Signin')}>
            <Text style={styles.voltar}> Voltar </Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrow:{
        borderWidth:1,
        position:'absolute',
        width: '95%',
        height: '80%',
        bottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },

    logo:{
        position: 'absolute',
        top: 10,
        height:'20%',
        resizeMode:'contain',
    },
    
    textocadastro:{
        position:'relative',
        fontWeight:'bold',
        fontSize: 23,
        alignSelf: 'center',
        marginTop: 20
    },

    textoidade:{
        position:'relative',
        fontSize:15,
        marginTop:20,
        paddingStart:18,
        fontWeight:'bold',
        marginBottom: 10,
    },

    inputidade:{
        backgroundColor: "white",
        borderRadius: 10,
        width: '36%', 
        paddingVertical: 5,
        paddingStart: 8,
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 20,
    },

    textogenero:{
        position:'absolute',
        fontSize:15,
        paddingStart:18,
        fontWeight:'bold',
        marginBottom: 10,
        bottom: 675,
        right: 25,
    },

    inputgenero:{
        position: 'absolute',
        backgroundColor: "white",
        borderRadius: 10,
        width: '38%', 
        paddingVertical: 5,
        paddingStart: 8,
        borderWidth: 1,
        borderColor: 'black',
        bottom: 638,
        right: 20,
    },

    inputemail:{
        backgroundColor: "white",
        borderRadius: 10,
        width: '90%', 
        paddingVertical: 5,
        paddingStart: 8,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
    },

    textoemail:{
        position:'relative',
        fontSize:15,
        marginTop:20,
        paddingStart:18,
        fontWeight:'bold',
        marginBottom: 10,
    },

    textosenha:{
        position:'relative',
        fontSize:15,
        marginTop:20,
        paddingStart:18,
        fontWeight:'bold',
        marginBottom: 10, 
    },

    inputsenha:{
        backgroundColor: "white",
        borderRadius: 10,
        width: '90%', 
        paddingVertical: 5,
        paddingStart: 8,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        marginBottom: 20,
    },

    avanço:{
        alignSelf:'center',
        fontWeight: 'bold'
    },

    botaoavanço:{
        backgroundColor: 'cyan',
        width: '30%',
        alignSelf:'flex-end',
        paddingVertical: 5,
        marginBottom: 20,
        marginRight: 20,
        borderRadius: 10,
    },

    voltar:{
        alignSelf: 'center',
        fontWeight: 'bold',
    },

    botaovoltar:{
        position: 'absolute',
        backgroundColor: 'pink',
        width: '30%',
        alignSelf:'flex-start',
        paddingVertical: 5,
        marginBottom: 20,
        marginLeft: 20,
        borderRadius: 10,
        bottom:0,
    }
})