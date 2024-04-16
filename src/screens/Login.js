// import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Botao from '../components/Botao.js';
import ClickableText from '../components/ClickableText.js';

const Login = (props) => {

  const [txtEmail, setTxtEmail] = useState('')
  const [txtSenha, setTxtSenha] = useState('')

  const compareLogin = () => {
    let Email = txtEmail
    let senha = txtSenha

    if(Email === "adm" && senha === "123"){
      console.log("Acesso concedido")
    }
    console.log("Email = " + Email + "\n Senha = " + senha)
  }

  const toScreenForgetPsw = () => {
    console.log("Direcionado para a tela ESQUECEU SENHA")
  }

  return (
    <View style={styles.container}>

      <Text style = {styles.logo}>Satisfying.you</Text>

      <Text style = {styles.text}>Email</Text>
      <TextInput style = {styles.textInput} value={txtEmail} onChangeText={setTxtEmail}/>

      <Text style = {styles.text}>Senha</Text>
      <TextInput style = {styles.textInput} value={txtSenha} onChangeText={setTxtSenha}/>

      <Botao txtButton="Entrar" buttonColor="#419ED7" functionButton={compareLogin}/>

      <ClickableText txt="Esqueci minha senha" txtColor="#FF6432" functionTextClick={toScreenForgetPsw}/>

      {/* <StatusBar style="auto"/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontWeight: "bold",
    fontSize: 36,
    padding: 20,
    color: "#4169e1"
  },
  text: {
    textAlign: "left",
    justifyContent: "flex-start",
    fontSize: 20,
    padding: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#eee",
    width: 200,
    height: 35,
    paddingLeft: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#372775',
    alignItems: "center",
    justifyContent: 'center'
  },
});

export default Login
