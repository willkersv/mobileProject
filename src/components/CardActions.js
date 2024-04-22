import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ModificarPesquisa from "../screens/ModificarPesquisa";
import Coleta from "../screens/Coleta";
import Relatorio from "../screens/Relatorio";

const CardActions = (props) => {
  const icone = props.icone;
  const title = props.title;
  const page = props.page;

  return (
    <View style={styles.cCard}>
      <TouchableOpacity style={styles.card} onPress={() => props.onPress(page)}>
        <Icon style={styles.icon} name={icone} size={80} color="#FFFFFF" />
        <Text style={styles.txtTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cCard: {
    height: 180,
    width: 200,
    marginRight: 25,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    backgroundColor: "#2B1D62",
    borderRadius: 20,

    shadowColor: "#000000",
    shadowOpacity: 0.75,
    elevation: 9,

    padding: 10,
  },
  txtTitle: {
    color: "white",
    fontFamily: "AveriaLibre",
    fontSize: 26,
  },
});

export default CardActions;
