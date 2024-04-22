import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import CardActions from "../components/CardActions.js";

const AcoesPesquisas = (props) => {
 
  //Fonte
  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  
  const handleNavigate = (page) => {
    switch(page) {
      case 'Modificar':
        props.navigation.navigate('ModificarPesquisa');
        break;
      case 'Coletar Dados':
        props.navigation.navigate('Coleta');
        break;
      case 'Relatório':
        props.navigation.navigate('Relatorio');
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cCards}>
        <CardActions
          icone = 'description'
          title="Modificar"
          onPress={() => handleNavigate('Modificar')}
        />
        <CardActions
          icone = 'devices'
          title="Coletar dados"
          onPress={() => handleNavigate('Coletar Dados')}
        />
        <CardActions
          icone = 'donut-large'
          title="Relatório"
          onPress={() => handleNavigate('Relatório')}
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
