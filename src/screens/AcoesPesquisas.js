import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import CardActions from "../components/CardActions.js";


const AcoesPesquisas = () => {
 
  //Fonte
  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

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

export default AcoesPesquisas;
