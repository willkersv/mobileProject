import { StatusBar } from "expo-status-bar";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";
import Agradecimentos from "./Agradecimentos";

const Coleta = (props) => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  let setNota = 0;

  const teste = (numero) => {
    if (numero == 1) {
      setNota = 1;
    } else if (numero == 2) {
      setNota = 2;
    } else if (numero == 3) {
      setNota = 3;
    } else if (numero == 4) {
      setNota = 4;
    } else if (numero == 5) {
      setNota = 5;
    }
    console.log("Nota é "+ setNota);
    // props.navigation.goBack();
    props.navigation.navigate(Agradecimentos)
    setTimeout(()=> props.navigation.navigate('Home'), 3000)
  
  };

  //Codigo
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>O que você achou do Carnaval 2024?</Text>
      <View style={styles.cIcones}>
        <TouchableOpacity onPress={() => teste(1)} style={styles.icone}>
          <Icon name="sentiment-very-dissatisfied" size={90} color="#D71616" />
          <Text style={styles.texto}>Péssimo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => teste(2)} style={styles.icone}>
          <Icon name="sentiment-dissatisfied" size={90} color="#FF360A" />
          <Text style={styles.texto}>Ruim</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => teste(3)} style={styles.icone}>
          <Icon name="sentiment-neutral" size={90} color="#FFC632" />
          <Text style={styles.texto}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => teste(4)} style={styles.icone}>
          <Icon name="sentiment-satisfied" size={90} color="#37BD6D" />
          <Text style={styles.texto}>Bom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => teste(5)} style={styles.icone}>
          <Icon name="sentiment-very-satisfied" size={90} color="#25BC22" />
          <Text style={styles.texto}>Excelente</Text>
        </TouchableOpacity>
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
    paddingHorizontal: "5%",
  },
  titulo: {
    flex: 0.4,
    color: "#FFFFFF",
    fontFamily: "AveriaLibre",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
  },
  texto: {
    color: "#FFFFFF",
    fontFamily: "AveriaLibre",
    fontSize: 22,
    marginTop: 10,
  },
  cIcones: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icone: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Coleta;
