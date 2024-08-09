import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,    
} from 'react-native'

import { useNavigation } from "@react-navigation/native";

export default function Cadastrotrabalho() {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <Text> Outra Tela </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})