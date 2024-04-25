import { View, StyleSheet, Text, TextInput } from 'react-native';


const LabelTextInput = (props) => {
    
    const label = props.label
    const placeHolder = props.placeHolder
    const inputValue = props.inputValue
    const inputType = props.inputType
    const onChangeText = props.onChangeText

    let secureTextEntry = false
    let keyboardType = 'default'

    if(inputType === "PSW"){
        secureTextEntry = true
    }
    if(inputType === "EMAIL"){
        keyboardType = 'email-address'
    }

    return (
        <View style={styles.txtInputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} placeholderTextColor={'#3F92C5'} placeholder={placeHolder} value={inputValue} onChangeText={onChangeText} secureTextEntry={secureTextEntry} keyboardType={keyboardType} autoCapitalize='none'/>
        </View>
    );
};


const styles = StyleSheet.create({
    label: {
        fontFamily: "AveriaLibre",
        textAlign: "left",
        fontSize: 20,
        color: "#FFFFFF"
    },
    input: {
        fontSize: 18,
        fontFamily: "AveriaLibre",
        color: "#3F92C5",
        backgroundColor: "#FFFFFF",
        paddingLeft: 5,
        height: 30,
    },
    txtInputContainer: {
        marginTop: 10,
    },
})

export default LabelTextInput

