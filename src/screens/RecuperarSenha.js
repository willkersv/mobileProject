import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth_mod } from '../config/firebase';
import LabelTextInput from '../components/LabelTextInput';
import TextWarn from '../components/TextWarn';
import Button from '../components/Button';

const RecuperarSenha = (props) => {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  const [fontsLoaded] = useFonts({
    'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
  });

  if(!fontsLoaded) {
    return null
  }

  const [txtEmail, setEmail] = useState('')
  const [txtWarn, setWarn] = useState(false)

  const recuperar = () => {
    sendPasswordResetEmail(auth_mod, txtEmail)
      .then(() => {
        console.log("E-mail de redefinição enviado com sucesso.");
        console.log("Direcionado para a tela Login")
        props.navigation.navigate('Login')
      })
      .catch((error) => {
        console.log("Falha ao enviar e-mail de redefinição." + JSON.stringify(error));
        console.log("\nEmail = " + txtEmail )
        setWarn(true)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.cInput}>
        <LabelTextInput label='E-mail' placeHolder='jurandir.pereira@hotmail.com' placeholderTextColor='#3F92C5' inputValue={txtEmail} inputType='EMAIL' onChangeText={(txtEmail) => setEmail(txtEmail)}/>
      </View>

      <View style={styles.cWarn}>
        <TextWarn txt='E-mail parece ser inválido' isVisible={txtWarn}/> 
      </View>

      <View style={styles.cButton}>
        <Button txtButton="RECUPERAR" buttonColor="#37BD6D" txtColor="#FFFFFF" functionButton={recuperar}/>
      </View>
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor: '#372775',
    padding: 20,
    paddingHorizontal: '20%',
    paddingTop: '0%'
  },
  cInput: {
    marginTop: 5,
    alignContent: 'center',
    justifyContent: 'center'
  },
  cWarn: {
    marginBottom: 40,
  },
  cButtons: {
    marginTop: 20,
  }
});

export default RecuperarSenha
