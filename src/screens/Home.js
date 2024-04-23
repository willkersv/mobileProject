import { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';

import SearchInput from '../components/SearchInput.js';
import CardResearch from '../components/CardResearch.js';
import Button from '../components/Button.js';

const Home = (props) => {

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
    const handleNavigate = (page) => {
        switch(page) {
            case 'Carnaval':
                props.navigation.navigate('Carnaval');
                break;
            case 'NovaPesquisa':
                props.navigation.navigate('NovaPesquisa');
                console.log("DIRECIONADO PARA NOVAPESQUISA")
                break;
        }
    }

    return(
        <View style={styles.container}>

            <View style={styles.cContent}>
                <SearchInput placeholder="Insira o termo de busca..." value={txtSearch} onChangeText={setTxtSearch} />
                
                <View style={styles.cCards}>
                    <CardResearch img={require('../../assets/images/compCell.png')} title="SECOMP 2023" date="10/10/2023" onPress={() => handleNavigate('Carnaval')}/>
                    <CardResearch img={require('../../assets/images/people.png')} title="UBUNTU 2022" date="05/06/2022"  onPress={() => handleNavigate('Carnaval')}/>
                    <CardResearch img={require('../../assets/images/girl.png')} title="MENINAS CPU" date="01/04/2022" onPress={() => handleNavigate('Carnaval')}/>
                    <CardResearch img={require('../../assets/images/dontKnow.png')} title="PESQUISA" date="32/13/2024" onPress={() => handleNavigate('Carnaval')}/>
                </View>

                <View style={styles.button}>
                    <Button txtButton="NOVA PESQUISA" buttonColor="#37BD6D" txtColor="#FFFFFF" functionButton={() => handleNavigate('NovaPesquisa')} />
                </View>
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
        height: "20%",
        paddingTop: 10,
        paddingLeft: 10,
        flexDirection:"row"
    },
    cContent:{
        marginVertical: 15,
        paddingHorizontal: "3%"
    },
    cCards:{
        flexDirection: "row",
        height:150,
        marginVertical:18,
    },
    button:{
        marginVertical: 10
    }
})

export default Home