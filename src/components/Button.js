import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = (props) => {

    const txtButton = props.txtButton
    const buttonColor = props.buttonColor
    const txtColor = props.txtColor
    const buttonHeight = props.buttonHeight

    return(
        <TouchableOpacity onPress={props.functionButton}>
            <Text style = {styles.buttonStyle(buttonColor, txtColor, buttonHeight)}>{txtButton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: (buttonColor, txtColor, buttonHeight) => ({
        backgroundColor: buttonColor,
        color: txtColor,
        fontFamily: "AveriaLibre",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 24,
        marginTop: 5,
        height: buttonHeight,
        shadowColor:"#000000",
        elevation:12
    })
})

export default Button