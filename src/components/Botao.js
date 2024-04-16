import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Botao = props => {
  const txtButton = props.txtButton;
  const buttonColor = props.buttonColor;

  return (
    <TouchableOpacity onPress={props.functionButton}>
      <Text style={style.button(buttonColor)}>{txtButton}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: buttonColor => ({
    padding: 10,
    margin: 20,
    backgroundColor: buttonColor,
    fontSize: 26,
  }),
});
export default Botao;
