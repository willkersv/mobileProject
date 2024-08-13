import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth_mod, db } from '../config/firebase';
import Button from "../components/Button.js";
import LabelTextInput from "../components/LabelTextInput.js";
import TextWarn from "../components/TextWarn.js";
import { setDoc, doc } from "firebase/firestore";

const Login = (props) => {

  const [txtEmail, setTxtEmail] = useState("");
  const [txtSenha, setTxtSenha] = useState("");
  const [showWarn, setShowWarn] = useState(false);

  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  //Funcoes do codigo
  const autenticar = async() => {
    let email = txtEmail;
    let senha = txtSenha;

    signInWithEmailAndPassword(auth_mod, txtEmail, txtSenha)
      .then((userLogged) => {
        console.log(userLogged)
        const user = userLogged.user
        // Adicionar o usuário à coleção `users`
        setDoc(doc(db, 'users', user.uid), {
          email,
          createdAt: new Date(),
        });
        console.log("Usuário autenticado com sucesso: " + JSON.stringify(userLogged));
        console.log("\nEmail = " + email + "\nSenha = " + senha);
        console.log("Direcionado para a tela HOME");
        props.navigation.navigate("Drawer");

      })
      .catch((error) => {
        console.log("Erro ao autenticar usuário: " + JSON.stringify(error));
        console.log("\nEmail = " + email + "\nSenha = " + senha);
        setShowWarn(true); // Exibe o TextWarn em caso de erro
      })

    

  };


  const toScreenForgetPsw = () => {
    console.log("Direcionado para a tela ESQUECEU SENHA")
    props.navigation.navigate('RecuperarSenha')
  }

  const toScreenCreateAccount = () => {
    console.log("Direcionado para a tela CRIAR CONTA")
    props.navigation.navigate('NovaConta')    
  }

  //Codigo
  return (
    <View style={styles.container}>
      <View style={styles.cLogo}>
        <Text style={styles.txtLogo}>Satisfying.you</Text>
        <Icon
          style={{ marginLeft: 30 }}
          name="mood"
          size={50}
          color="#FFFFFF"
        />
      </View>

      <View style={styles.cInput}>
        <LabelTextInput
          label="E-mail"
          placeHolder="jurandir.pereira@hotmail.com"
          inputValue={txtEmail}
          inputType="EMAIL"
          onChangeText={(txtEmail) => setTxtEmail(txtEmail)}
        />
        <LabelTextInput
          label="Senha"
          placeHolder="*********"
          inputValue={txtSenha}
          inputType="PSW"
          onChangeText={(txtSenha) => setTxtSenha(txtSenha)}
        />

        <TextWarn
          txt="E-mail e/ou senha inválidos."
          isVisible={showWarn} // Controla a visibilidade com a prop isVisible
        />

        <Button
          txtButton="Entrar"
          buttonColor="#37BD6D"
          txtColor="#FFFFFF"
          functionButton={autenticar}
        />
      </View>

      <View style={styles.cButtons}>
        <Button
          txtButton="Criar minha conta"
          buttonColor="#419ED7"
          txtColor="#FFFFFF"
          buttonHeight={30}
          functionButton={() => {
            toScreenCreateAccount();
          }}
        />
        <Button
          txtButton="Esqueci minha senha"
          buttonColor="#B0CCDE"
          txtColor="#FFFFFF"
          buttonHeight={30}
          functionButton={() => {
            toScreenForgetPsw();
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

//Estilo do codigo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#372775",
    padding: 20,
    paddingHorizontal: "20%",
  },

  cLogo: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  cInput: {
    justifyContent: "center",
    alignContent: "center",
  },
  cButtons: {
    marginTop: 20,
  },

  txtLogo: {
    color: "#FFFFFF",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontFamily: "AveriaLibre",
    fontSize: 40,
  },
});

export default Login;
