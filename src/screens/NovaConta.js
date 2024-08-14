import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../config/firebase';
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
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const cadastrarUsuario = () => {
    let email = txtEmail
    let senha = txtSenha
    let repSenha = txtRepSenha

    if(senha !== repSenha) {
      setIsPasswordValid(true);
      return; // Se as senhas não forem iguais, parar a execução
    }
    
    createUserWithEmailAndPassword(auth_mod, txtEmail, txtSenha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso: " + JSON.stringify(userCredential));
        console.log("\nEmail = " + email + "\nSenha = " + senha)
        console.log('Acesso concedido')
        console.log("Direcionado para a tela Login")
        props.navigation.navigate('Login')
      })
      .catch((error) => {
        console.log("Erro ao criar usuário: " + JSON.stringify(error));
        setIsPasswordValid(true)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.cInput}>
        <LabelTextInput label='E-mail' placeHolder='jurandir.pereira@hotmail.com' inputValue={txtEmail} inputType='EMAIL' onChangeText={(txtEmail) => setEmail(txtEmail)}/>
        <LabelTextInput label='Senha' placeHolder='*********' inputValue={txtSenha} inputType='PSW' onChangeText={(txtSenha) => setSenha(txtSenha)}/>
        <LabelTextInput label='Repetir Senha' inputValue={txtRepSenha} inputType='PSW' onChangeText={(txtRepSenha) => setRepSenha(txtRepSenha)}/>
      </View>
      
      <TextWarn 
        txt='O campo repetir senha difere da senha' 
        isVisible={isPasswordValid}
      />
      
      <View style={styles.cButtons}>
        <Button 
          txtButton="CADASTRAR" 
          buttonColor="#37BD6D" 
          txtColor="#FFFFFF" 
          functionButton={cadastrarUsuario}
        />
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
  cButtons: {
    marginTop: 20,
  }
});

export default NovaConta
