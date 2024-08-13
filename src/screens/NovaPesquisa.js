import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';

import LabelTextInput from '../components/LabelTextInput';
import TextWarn from '../components/TextWarn';
import Button from '../components/Button';
import LabelTextInput_Icon from '../components/LabelTextInput_Icon';
import ImageInput from '../components/ImageInput.js';

import { useAuth } from '../contexts/AuthContext.js';
import { createSurvey } from '../config/functionPesquisa.js';

const NovaPesquisa = (props) => {
    const [txtNomePesquisa, setTxtNomePesquisa] = useState('');
    const [txtDataPesquisa, setTxtDataPesquisa] = useState('');
    const [image, setImage] = useState();
    const [txtValidaNome, setNomePesquisaError] = useState(false);
    const [txtValidaData, setDataPesquisaError] = useState(false);

    const user = useAuth().user

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
    const goToHome = async () => {
        if (txtNomePesquisa.trim() != '' || txtDataPesquisa.trim() != '') {
            validarNomePesquisa()
            validarDataPesquisa()
            await createSurvey(user.uid, txtNomePesquisa, txtDataPesquisa, image)
            props.navigation.pop(1);
        } else {
            console.log("Direcionado para HOME");
            props.navigation.pop(1);
        }

    };

    return (
        <View style={styles.container}>
            <LabelTextInput label="Nome" inputValue={txtNomePesquisa} onChangeText={(txtNomePesquisa) => setTxtNomePesquisa(txtNomePesquisa)}/>
            <TextWarn marginBottom="0" txt="Preencha o nome da pesquisa" isVisible={txtValidaNome} />

            <LabelTextInput_Icon label="Data" inputValue={txtDataPesquisa} inputType='DATA' onChangeText={(txtDataPesquisa) => setTxtDataPesquisa(txtDataPesquisa)}/>
            <TextWarn marginBottom="0" txt="Preencha a data" isVisible={txtValidaData} />

            <ImageInput setImageCallback={setImage} />
                
            <Button txtButton="Cadastrar" buttonColor="#37BD6D" txtColor="#FFFFFF" functionButton={goToHome} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#372775',
        paddingHorizontal: "20%",
    },
    camera: {
        textAlign: "center"
    },
});

export default NovaPesquisa;