import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";
import Login from "./Login";

const Agradecimentos = (props) => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  let setNota = 0;

  const teste = (props) => {
    props.navigation.popToTop();
  };

  //Codigo
  return (
    <View style={styles.cTexto}>
      <TouchableOpacity style={styles.container} onPress={() => teste(props)}>
        <Text style={styles.texto}>Obrigado por participar da pesquisa!</Text>
        <Text style={styles.texto}>Aguardamos você no próximo ano!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

//Estilo do codigo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#372775",
  },
  texto: {
    color: "#FFFFFF",
    fontFamily: "AveriaLibre",
    textAlign: "center",
    fontSize: 30,
    marginVertical:20
  },
  cTexto: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    
  },
});

export default Agradecimentos;
