import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from 'react'

const Agradecimentos = (props) => {

  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  useEffect(() => {
    setTimeout(() => {
        props.navigation.pop()
    }, 3000)
  }, [])

  //Codigo
  return (
    <View style={styles.cTexto}>
      <Text style={styles.texto}>Obrigado por participar da pesquisa!</Text>
      <Text style={styles.texto}>Aguardamos você no próximo ano!</Text>
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
    marginVertical: 20,
  },
  cTexto: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#372775",
  },
});

export default Agradecimentos;
