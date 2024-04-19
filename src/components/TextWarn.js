import { StyleSheet, Text } from 'react-native';

const TextWarn = (props) => {
    const txt = props.txt
    const isVisible = props.isVisible

    return(
        <Text style={[styles.txtWarn, {opacity: isVisible ? 1 : 0}]}>
            {txt}
        </Text>
    )
}

const styles = StyleSheet.create({
    txtWarn: {
        fontFamily: "AveriaLibre",
        color:"#FD7979",
        marginBottom: 10,
    },
})

export default TextWarn
