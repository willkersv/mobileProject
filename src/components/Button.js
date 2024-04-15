import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = (props) => {

    const txtButton = props.txtButton
    const buttonColor = props.buttonColor
    const txtColor = props.txtColor

    return(
        <TouchableOpacity onPress={props.functionButton}>
            <Text style = {style.buttonStyle(buttonColor, txtColor)}>{txtButton}</Text>
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
    buttonStyle: (buttonColor, txtColor) => ({
        backgroundColor: buttonColor,
        color: txtColor,
        textAlign: "center",
        fontSize: 24,
        marginTop: 5,
        marginBottom: 5
    })

})
export default Button