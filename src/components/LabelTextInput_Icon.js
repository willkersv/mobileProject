import { View, StyleSheet, Text, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const LabelTextInput_Icon = (props) => {
    
    const label = props.label
    const placeHolder = props.placeHolder
    const inputValue = props.inputValue
    const inputType = props.inputType
    const onChangeText = props.onChangeText

    let keyboardType = 'default'
    let secureTextEntry = false

    if(inputType === "PSW"){
        secureTextEntry = true
    }
    if(inputType === "EMAIL"){
        keyboardType = 'email-address'
    }
    if (inputType === 'DATA'){
        keyboardType = 'default'
    }

    return (
        <View style={styles.txtInputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputIcon}>
                <TextInput style={styles.input} 
                placeholderTextColor={'#3F92C5'}
                placeholder={placeHolder} 
                value={inputValue} 
                onChangeText={onChangeText} 
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                autoCapitalize='none'/>

                <Ionicons name="calendar" size={20} color="gray"/>
            </View>
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
        flex: 1,
        fontSize: 18,
        fontFamily: "AveriaLibre",
        color: "#3F92C5",

    },
    txtInputContainer: {
        marginTop: 10,
    },
    inputIcon:{
        backgroundColor:'#FFFFFF',
        paddingLeft: 5,
        paddingRight:5,
        height: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
})

export default LabelTextInput_Icon