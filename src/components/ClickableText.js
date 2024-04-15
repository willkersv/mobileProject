import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ClickableText = (props) => {

    const txt = props.txt
    const txtColor = props.txtColor
    
    return(
        <TouchableOpacity onPress={props.functionTextClick}>
            <Text style = {styles.textStyle(txtColor)}>{txt}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    textStyle: (txtColor) => ({
        color: txtColor
    })
});

export default ClickableText