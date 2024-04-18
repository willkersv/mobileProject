import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View,StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SearchInput from '../components/SearchInput.js';
import Button from '../components/Button.js';

const Home = () => {

    //Variáveis
    const [txtSearch, setTxtSearch] = useState('')

    //Fonte
    const [fontsLoaded] = useFonts({
        'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
    });
    if(!fontsLoaded) {
        return null
    }

    //Funcoes
    const searchCard = () => {

    }

    const createResarch = () => {
        console.log("BOTAO NOVA PESQUISA")
    }

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return(
        <View style={styles.container}>
            <View style={styles.cTop}>
                {/* COMPONENTIZAR ESSE BACANA AQUI
                SERA UM TouchableOpacity COM O ICONE DENTRO */}
                <Icon style={{paddingLeft: 10, paddingTop: 10, color: "#FFFFFF"}} name="menu" size={60} />
            </View>

            <View style={styles.cContent}>
                <SearchInput placeholder="Insira o termo de busca..." value={txtSearch} onChangeText={setTxtSearch} />
                
                <View style={styles.cCards}>
                    
                </View>

                <Button txtButton="NOVA PESQUISA" buttonColor="#37BD6D" txtColor="#FFFFFF" functionButton={createResarch} />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#372775',
    },
    cTop:{
        backgroundColor: "#2B1D62",
        width: "100%",
        height: "20%"
    },
    cContent:{
        padding: "3%"
    },
    cCards:{
        flex: 1,
        flexDirection: "row",
    }
})

export default Home