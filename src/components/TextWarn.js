import { StyleSheet, Text } from 'react-native';

const TextWarn = (props) => {
    const txt = props.txt
    const isVisible = props.isVisible
    const marginBottom = props.marginBottom || 15 

    return(
        <Text style={[styles.txtWarn(marginBottom), {opacity: isVisible ? 1 : 0}]}>
            {txt}
        </Text>
    )
}

const styles = StyleSheet.create({
    txtWarn: (marginBottom) => ({
        fontFamily: "AveriaLibre",
        color:"#FD7979",
        marginBottom: marginBottom,
    }),
})

export default TextWarn