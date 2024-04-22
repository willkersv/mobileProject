import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, TextInput } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useState } from "react";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";
import Button from "../components/Button.js";
import LabelTextInput from "../components/LabelTextInput.js";
import TextWarn from "../components/TextWarn.js";
import NovaConta from "./NovaConta.js";

const Login = (props) => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  const [txtEmail, setTxtEmail] = useState("");
  const [txtSenha, setTxtSenha] = useState("");
  const [isLoginValid, setIsLoginValid] = useState(false);

  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  //Funcoes do codigo
  const handleLogin = () => {
    let email = txtEmail;
    let senha = txtSenha;

    //VALIDA O EMAIL
    const validateEmail = (email) => {
      const regex = /\S+@\S+\.\S+/;
      const emailIsValid = regex.test(email);
      setIsLoginValid(emailIsValid);
      return emailIsValid;
    };

    //IMPLEMENTAR LOGICA DE LOGIN COMPARANDO EMAIL E SENHA NO FUTURO
    //POR ENQUANTO SE FOR UM EMAIL VALIDO JA CONSEGUE ACESSO A PAGINA HOME
    if (validateEmail(email)) {
      console.log("Direcionado para a tela HOME");
      props.navigation.navigate("Drawer");
    } else {
      console.log("E-mail e/ou senha inválidos.");
    }
    console.log("\nEmail = " + email + "\nSenha = " + senha);
  };

  const toScreenForgetPsw = () => {
    console.log("Direcionado para a tela ESQUECEU SENHA");
    // props.navigation.navigate(Coleta);
  };

  const toScreenCreateAccount = () => {
    console.log("Direcionado para a telaColeta");
    props.navigation.navigate(NovaConta);
  };

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
          isVisible={!isLoginValid}
        />

        <Button
          txtButton="Entrar"
          buttonColor="#37BD6D"
          txtColor="#FFFFFF"
          functionButton={handleLogin}
        />
      </View>

      <View style={styles.cButtons}>
        <Button
          txtButton="Criar minha conta"
          buttonColor="#419ED7"
          txtColor="#FFFFFF"
          functionButton={() => {
            toScreenCreateAccount();
          }}
        />
        <Button
          txtButton="Esqueci minha senha"
          buttonColor="#B0CCDE"
          txtColor="#FFFFFF"
          functionButton={toScreenForgetPsw()}
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
