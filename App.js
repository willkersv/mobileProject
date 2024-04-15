import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font'
import Button from './src/components/Button.js';


const App = () => {

  const [txtEmail, setTxtEmail] = useState('')
  const [txtSenha, setTxtSenha] = useState('')

  const [fontsLoaded] = useFonts({
    'AveriaLibre': require('./assets/fonts/AveriaLibre-Regular.ttf'),
  });

  if(!fontsLoaded) {
    return null
  }

  //Funcoes do codigo
  const compareLogin = () => {
    let Email = txtEmail
    let senha = txtSenha

    if(Email === "adm" && senha === "123"){
      console.log("Acesso concedido")
    }
    else{
      console.log("E-mail e/ou senha inválidos.")
      styles.textWarn.opacity = 1
    }
    console.log("Email = " + Email + "\n Senha = " + senha)
  }

  const toScreenForgetPsw = () => {
    console.log("Direcionado para a tela ESQUECEU SENHA")
  }

  const toScreenCreateAccount = () => {
    console.log("Direcionado para a tela CRIAR CONTA")
  }

  //Codigo
  return (
    <View style={styles.container}>
      <View style={styles.cLogo}>
        <Text style={styles.txtLogo}>Satisfying.you</Text>
      </View>

      <View style = {styles.cInput}>
        <Text style = {styles.text}>E-mail</Text>
        <TextInput style = {styles.textInput} value={txtEmail} onChangeText={setTxtEmail}/>

        <Text style = {styles.text}>Senha</Text>
        <TextInput style = {styles.textInput} value={txtSenha} onChangeText={setTxtSenha}/>

        <Text style = {styles.textWarn}>E-mail e/ou senha inválidos.</Text>

        <Button txtButton="Entrar" buttonColor="#37BD6D" txtColor="#FFFFFF" functionButton={compareLogin}/>
      </View>
      
      <View style={styles.cButtons}>
        <Button txtButton="Criar minha conta" buttonColor="#419ED7" txtColor="#FFFFFF" functionButton={toScreenCreateAccount}/>
        <Button txtButton="Esqueci minha senha" buttonColor="#B0CCDE"  txtColor="#FFFFFF" functionButton={toScreenForgetPsw}/>
      </View>

      <StatusBar style="auto"/>
    </View>
  );
}

//Estilo do codigo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor: '#372775',
    padding: 20,
  },

  cLogo: {
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"center"
  },
  cInput: {
    paddingTop: 10
  },
  cButtons: {
    paddingTop: 40,
  },
  
  txtLogo: {
    color: "#FFFFFF",
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: "center",
    fontFamily: "AveriaLibre",
    fontSize: 40
  },
  text: {
    fontFamily: "AveriaLibre",
    textAlign: "left",
    justifyContent: "flex-start",
    fontSize: 20,
    marginTop: 20,
    color: "#FFFFFF"
  },
  textInput: {
    fontFamily: "AveriaLibre",
    backgroundColor: "#FFFFFF",
    paddingLeft: 5,
    height: 40
  },
  textWarn: {
    fontFamily: "AveriaLibre",
    color:"#FD7979",
    marginBottom: 10,
    opacity: 0
  }

});

export default App
