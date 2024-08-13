import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import CardActions from "../components/CardActions.js";
import {useSurvey} from '../contexts/SurveyContext';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';

const AcoesPesquisas = (props) => {

  const {selectedSurvey} = useSurvey();

  const route = useRoute();
  const navigation = useNavigation();
  const {title} = route.params || {}; // Acessar o parâmetro passado

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title || 'Modificar Pesquisa', // Define um título padrão caso o parâmetro não seja fornecido
    });
  }, [navigation, title]);

 
  //Fonte
  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  
  const handleNavigate = (page) => {
    switch(page) {
      case 'Modificar':
        props.navigation.navigate('ModificarPesquisa');
        break;
      case 'Coletar Dados':
        props.navigation.navigate('Coleta');
        break;
      case 'Relatório':
        props.navigation.navigate('Relatório');
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
