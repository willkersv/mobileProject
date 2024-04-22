import { useState } from "react";
import { View,StyleSheet, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import { useFonts } from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import LabelTextInput from '../components/LabelTextInput.js'
import LabelTextInput_Icon from '../components/LabelTextInput_Icon.js'
import Button from '../components/Button.js';

const ModificarPesquisa = () => {

    //Fonte
    const [fontsLoaded] = useFonts({
        'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
    });
    if(!fontsLoaded) {
        return null
    }


    const SalvarModificacao = () => {
        console.log("BOTAO SALVAR MODIFICACAO")
    }

    const ApagarModificacao = () => {
      console.log("BOTAO APAGAR MODIFICACAO")
  }

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return (
        <View style={styles.container}>
            <View style = {styles.cInput}>
                <LabelTextInput style={styles.label} label="Nome" placeHolder="Carnaval 2024"/>
                <LabelTextInput_Icon style={styles.label} label="Data" placeHolder="16/02/2024" inputType="DATA"/>

                <Text style={styles.label}>Imagem</Text>
                <Image style={{width:250, height:75, marginBottom:30}} label='Imagem' source={require('../images/Imagem_projeto.png')}/>
                
                <Button txtButton="Salvar" buttonColor="#37BD6D" txtColor="#FFFFFF" functionButton={SalvarModificacao}/>
            </View>
            <TouchableOpacity
              onPress={ApagarModificacao}
              style={styles.touchableOpacityStyle}>

              <Icon name='delete' size={35}  color="#FFFFFF"/>
              <Text style={styles.botao}>Apagar</Text>
            </TouchableOpacity>
    </View>

    )
}

//Estilo do codigo
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: 'center',
      backgroundColor: '#372775',
      padding: 20,
      paddingHorizontal: '20%'
    },
    label: {
      fontFamily: "AveriaLibre",
      textAlign: "left",
      fontSize: 20,
      color: "#FFFFFF",
      marginTop: 10
  },
    cInput: {
      justifyContent: "center",
      alignContent: "center",
      marginBottom: 20,
      marginTop:10,
    },
    touchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 80,
      bottom: 15
    },
    botao: {
      fontFamily: "AveriaLibre",
      fontSize: 13,
      color: "#FFFFFF",
  },
});

export default ModificarPesquisa