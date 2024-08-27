import { useState, useEffect } from "react";
import { View,StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/MaterialIcons';

import LabelTextInput from '../components/LabelTextInput.js'
import LabelTextInput_Icon from '../components/LabelTextInput_Icon.js'
import Button from '../components/Button.js';
import ImageInput from '../components/ImageInput.js';
import PopUp from '../components/PopUp.js';

import {useSurvey} from '../contexts/SurveyContext.js';
import {useAuth} from '../contexts/AuthContext.js';
import {deleteSurvey, updateSurvey} from '../config/functionPesquisa.js';


const ModificarPesquisa = (props) => {
    
  //referente ao modal de exclusao=================
    const [modalVisible, setModalVisible] = useState(false);
    const [txtNomePesquisa, setTxtNomePesquisa] = useState('');
    const [txtDataPesquisa, setTxtDataPesquisa] = useState('');
    const [image, setImage] = useState(null);

    const user = useAuth().user
    const {selectedSurvey} = useSurvey();

    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };


    useEffect(() => {
      // Carrega dados iniciais
      if (selectedSurvey) {
        setTxtNomePesquisa(selectedSurvey.name || '');
        setTxtDataPesquisa(selectedSurvey.date || '');
        setImage(selectedSurvey.imageUrl || null);
      }
    }, [selectedSurvey]);
  
    
    const deletarPesquisa = async () => {
      await deleteSurvey(user.uid, selectedSurvey.id);
      props.navigation.pop(2);
    };
  
    //=============================================
  
    const SalvarModificacao = async () => {
      try {
        // Se uma nova imagem foi selecionada
        if (image instanceof Object) {
          await updateSurvey(user.uid, selectedSurvey.id, txtNomePesquisa, txtDataPesquisa, image);
        } else {
          // Se nenhuma nova imagem foi selecionada, apenas atualize os dados
          await updateSurvey(user.uid, selectedSurvey.id, txtNomePesquisa, txtDataPesquisa, null);
        }
        // Navegar de volta após a atualização
        props.navigation.pop(2);
      } catch (error) {
        console.error('Erro ao salvar modificações:', error);
      }
    };
  
    //=============================================
  
    //Fonte
    const [fontsLoaded] = useFonts({
        'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
    });
    if(!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style = {styles.cInput}>
                <LabelTextInput style={styles.label} label="Nome" placeHolder={txtNomePesquisa} inputValue={txtNomePesquisa} onChangeText={setTxtNomePesquisa}/>
                <LabelTextInput_Icon style={styles.label} label="Data" placeHolder={txtDataPesquisa} inputType="DATA" inputValue={txtDataPesquisa} onChangeText={setTxtDataPesquisa}/>

                {image ? (
                  <ImageInput setImageCallback={setImage} initialValue={image} />
                ) : (
                  <Text style={styles.label}>Nenhuma imagem disponível</Text>
                )}
                
                <Button txtButton="Salvar" buttonColor="#37BD6D" txtColor="#FFFFFF" functionButton={SalvarModificacao}/>
            </View>
            <TouchableOpacity
              onPress={openModal}
              style={styles.touchableOpacityStyle}>
              <Icon name='delete' size={35}  color="#FFFFFF"/>
              <Text style={styles.botao}>Apagar</Text>
            </TouchableOpacity>
            <PopUp modalVisible={modalVisible} closeModal={closeModal} modalAction={deletarPesquisa}/>
    </View>

    )
}

//Estilo do codigo
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: 'center',
      backgroundColor: '#372775',
      padding: 20,
      paddingHorizontal: '20%'
    },
    label: {
      fontFamily: "AveriaLibre",
      textAlign: "left",
      fontSize: 20,
      color: "#FFFFFF",
      marginTop: 10
  },
    cInput: {
      justifyContent: "center",
      alignContent: "center",
      marginBottom: 20,
      marginTop:10,
    },
    touchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 80,
      bottom: 20
    },
    botao: {
      fontFamily: "AveriaLibre",
      fontSize: 13,
      color: "#FFFFFF",
  },
});

export default ModificarPesquisa