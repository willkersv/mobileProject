import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';

import LabelTextInput from '../components/LabelTextInput';
import TextWarn from '../components/TextWarn';
import Button from '../components/Button';

const NovaConta = (props) => {

  const [fontsLoaded] = useFonts({
    'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
  });

  if(!fontsLoaded) {
    return null
  }

  const [txtEmail, setEmail] = useState('')
  const [txtSenha, setSenha] = useState('')
  const [txtRepSenha, setRepSenha] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);


  const handleLogin = () => {
    let email = txtEmail
    let senha = txtSenha
    let repSenha = txtRepSenha

    //Validação do email
    const validateEmail = (email) => {
      const regex = /\S+@\S+\.\S+/
      const emailIsValid = regex.test(email)

      setIsEmailValid(emailIsValid)
      return emailIsValid
    }

    const validatePassword= (senha, repSenha) => {
      const PswValid = senha === repSenha;
      setIsPasswordValid(PswValid)
      return PswValid
    }

    //O email também é verificado, assim como na tela de login
    if(validateEmail(email) && validatePassword(senha, repSenha)){

      console.log('Acesso concedido')
      console.log("Direcionado para a tela Login")
      props.navigation.navigate('Login')
    }


    console.log("\nEmail = " + email + "\nSenha = " + senha)
  }

  return (
    <View style={styles.container}>
      <View style={styles.cInput}>

        <LabelTextInput label='E-mail' placeHolder='jurandir.pereira@hotmail.com' inputValue={txtEmail} inputType='EMAIL' onChangeText={(txtEmail) => setEmail(txtEmail)}/>
        <LabelTextInput label='Senha' placeHolder='*********' inputValue={txtSenha} inputType='PSW' onChangeText={(txtSenha) => setSenha(txtSenha)}/>
        <LabelTextInput label='Repetir Senha' inputValue={txtRepSenha} inputType='PSW' onChangeText={(txtRepSenha) => setRepSenha(txtRepSenha)}/>
      </View>

      <View style={styles.cWarn}>

        {!isEmailValid && <TextWarn txt='E-mail inválido.' isVisible={!isEmailValid}/>} 
        {!isPasswordValid && <TextWarn txt='O campo repetir senha difere da senha' isVisible={!isPasswordValid}/>} 
      </View>

      <View style={styles.cButtons}>
        <Button txtButton="CADASTRAR" buttonColor="#37BD6D" txtColor="#FFFFFF" functionButton={handleLogin}/>
      </View>
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

  cWarn:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cButtons: {
    marginTop: 20,
  }
});

export default NovaConta
