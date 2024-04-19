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
        fontFamily: "AveriaLibre",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 24,
        marginTop: 5,
        height: 30,
        paddingHorizontal: '20%'
    })
})

export default Button
