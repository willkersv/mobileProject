import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchInput = (props) => {
    
    const placeholder = props.placeholder
    const inputValue = props.inputValue
    const onChangeText = props.onChangeText

    return (
        <View style={styles.cInput}>
            <Icon style={styles.iconStyle} name='search' size={30}/>
            <TextInput style={styles.input} placeholder={placeholder} value={inputValue} onChangeText={onChangeText} autoCapitalize='none'/>
        </View>
    );
};


const styles = StyleSheet.create({
    cInput: {
        flexDirection:"row",
        backgroundColor:"#FFFFFF",
        alignItems: "center",
        paddingLeft: 5
    },
    input: {
        flex:1,
        fontSize: 18,
        fontFamily:"AveriaLibre",
        color: "#3F92C5",
        backgroundColor: "#FFFFFF",
        paddingLeft: 5,
        height: 35,

    },
    iconStyle:{
        color:"#aaaaaa" 
    }
})

export default SearchInput

