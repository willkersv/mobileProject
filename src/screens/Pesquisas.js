import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import SearchInput from "../components/SearchInput.js";
import CardActions from "../components/CardActions.js";
import Button from "../components/Button.js";

const Home = () => {
  //Variáveis
  const [txtSearch, setTxtSearch] = useState("");

  //Fonte
  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  //Funcoes
  const searchCard = () => {};

  const toNewResearch = () => {
    console.log("BOTAO NOVA PESQUISA: " + txtSearch);
  };

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  return (
    <View style={styles.container}>
      <View style={styles.cCards}>
        <CardActions
          icone = 'description'
          title="Modificar"
        />
        <CardActions
          icone = 'devices'
          title="Coletar dados"
        />
        <CardActions
          icone = 'donut-large'
          title="Relatório"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent:'center',
    backgroundColor: "#372775",
  },
  cCards: {
    flexDirection: "row",
    alignItems:'center',
    justifyContent: 'space-around',
    height: 170,
  },
});

export default Home;
