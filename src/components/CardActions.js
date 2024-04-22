import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CardResearch = (props) => {
  const icone = props.icone;
  const title = props.title;

  return (
    <View style={styles.cCard}>
      <TouchableOpacity style={styles.card} onPress={()=> console.log("oi testando")}>
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

    backgroundColor: "#312464",
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

export default CardResearch;
