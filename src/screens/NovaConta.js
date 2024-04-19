import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';
import LabelTextInput from '../components/LabelTextInput';
import TextWarn from '../components/TextWarn';
import Button from '../components/Button';

const NovaConta = (props) => {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  const [fontsLoaded] = useFonts({
    'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
  });

  if(!fontsLoaded) {
    return null
  }

  const [txtEmail, setEmail] = useState('')
  const [txtSenha, setSenha] = useState('')
  const [txtRepSenha, setRepSenha] = useState('')
  const [txtWarn, setWarn] = useState('')
  const [isEmailValid, setisEmailValid] = useState(false);

  const handleLogin = () => {
    let email = txtEmail
    let senha = txtSenha
    let repSenha = txtRepSenha

    //Validação do email
    const validateEmail = (email) => {
      const regex = /\S+@\S+\.\S+/
      const emailIsValid = regex.test(email)
      setisEmailValid(emailIsValid)
      return emailIsValid
    }

    //O email também é verificado, assim como na tela de login
    if(validateEmail(email) && senha == repSenha){
      console.log('Acesso concedido')
      console.log("Direcionado para a tela Login")
      props.navigation.navigate('Login')
    }
    else{
      console.log("E-mail e/ou senha inválidos")
      setWarn('O campo repetir senha difere da senha')
    }
    console.log("\nEmail = " + email + "\nSenha = " + senha)
  }

  return (
    <View style={styles.container}>
      <View style={styles.cInput}>
        <LabelTextInput label='E-mail' placeHolder='jurandir.pereira@hotmail.com' placeholderTextColor='#3F92C5' inputValue={txtEmail} inputType='EMAIL' onChangeText={(txtEmail) => setEmail(txtEmail)}/>
        <LabelTextInput label='Senha' placeHolder='*********' placeholderTextColor='#3F92C5' inputValue={txtSenha} inputType='PSW' onChangeText={(txtSenha) => setSenha(txtSenha)}/>
        <LabelTextInput label='Repetir Senha' inputValue={txtRepSenha} inputType='PSW' onChangeText={(txtRepSenha) => setRepSenha(txtRepSenha)}/>
      </View>

      <View style={styles.cWarn}>
        <TextWarn txt='O campo repetir senha difere da senha' isVisible={txtWarn}/> 
      </View>

      <View style={styles.cButton}>
        <Button txtButton="CADASTRAR" buttonColor="#37BD6D" txtColor="#FFFFFF" functionButton={handleLogin}/>
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
    marginBottom: 15,
  },
  cButtons: {
    marginTop: 20,
  }
});

export default NovaConta
