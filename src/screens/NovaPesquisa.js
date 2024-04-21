import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';
import LabelTextInput from '../components/LabelTextInput';
import TextWarn from '../components/TextWarn';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

const NovaPesquisa = (props) => {
    const [txtNomePesquisa, setTxtPesquisa] = useState('');
    const [txtDataPesquisa, setTxtDataPesquisa] = useState('');
    const [txtValidaNome, setNomePesquisaError] = useState(false);
    const [txtValidaData, setDataPesquisaError] = useState(false);

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    const [fontsLoaded] = useFonts({
        'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    //++++++++++++valida Nome Pesquisa++++++++++++
    const validarNomePesquisa = () => {
        if (txtNomePesquisa.trim() === '') {
            setNomePesquisaError(true);
        } else {
            setNomePesquisaError(false);
        }
    };
    //++++++++++++valida data Pesquisa++++++++++++
    const validarDataPesquisa = () => {
        if (txtDataPesquisa.trim() === '') {
            setDataPesquisaError(true);
        } else {
            setDataPesquisaError(false);
        }
    };
    //++++++++++++valida se os campos estão vazios e não deixa seguir pra HOME++++++++++++
    const goToHome = () => {
        if (txtNomePesquisa.trim() === '' || txtDataPesquisa.trim() === '') {
            console.log("Por favor, preencha todos os campos obrigatórios.");
        } else {
            console.log("Direcionado para HOME");
            props.navigation.navigate('Home');
        }

    };

    return (
        <View style={styles.container}>
            <LabelTextInput label="Nome" inputValue={txtNomePesquisa} inputType="pesquisa" onChangeText={(txtNomePesquisa) => { setTxtPesquisa(txtNomePesquisa); validarNomePesquisa(); }} />
            <TextWarn txt="Preencha o nome da pesquisa" isVisible={txtValidaNome} />
            <LabelTextInput label="Data" inputValue={txtDataPesquisa} inputType="data" onChangeText={(txtDataPesquisa) => { setTxtDataPesquisa(txtDataPesquisa); validarDataPesquisa(); }}>
                <TouchableOpacity onPress={() => console.log("Ícone de calendário clicado")}><Icon name="calendario" size={10} color="black" style={{ position: 'absolute', top: 15, right: 15 }} /></TouchableOpacity></LabelTextInput>
            <TextWarn txt="Preencha a data" isVisible={txtValidaData} />
            <View style={styles.camera}>
                <LabelTextInput label="Imagem" placeHolder="Câmera/Galeria De Imagens " />
            </View>
            <View style={styles.button}>
                <Button txtButton="Cadastrar" txtColor="#FFFFFF" functionButton={goToHome} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#372775',
        padding: 100,
        justifyContent: 'center'
    },
    camera: {
        paddingRight: '63%',
    },
    button: {
        backgroundColor: '#37BD6D',
        marginTop: 30,
        textAlign:'center',
        justifyContent: 'center'
    }
});

export default NovaPesquisa;