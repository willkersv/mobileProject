import { useEffect, useState } from 'react';
import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { useFonts } from 'expo-font';

import SearchInput from '../components/SearchInput.js';
import CardResearch from '../components/CardResearch.js';
import Button from '../components/Button.js';

import { getSurveys } from '../config/functionPesquisa.js';

import { useAuth } from '../contexts/AuthContext.js';
import { useSurvey } from '../contexts/SurveyContext.js';
import { useFocusEffect } from '@react-navigation/native';

const Home = (props) => {

    // Variáveis
    const [txtSearch, setTxtSearch] = useState('');
    const [userSurveys, setUserSurveys] = useState([]);
    const user = useAuth().user;
    const { setSelectedSurvey } = useSurvey();

    // Fonte
    const [fontsLoaded] = useFonts({
        'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    // Funções
    const handleNavigate = (page) => {
        switch (page) {
            case 'Carnaval':
                props.navigation.navigate('Carnaval');
                break;
            case 'NovaPesquisa':
                props.navigation.navigate('NovaPesquisa');
                console.log("DIRECIONADO PARA NOVAPESQUISA")
                break;
        }
    }

    const handleCardPress = surveyObj => {
        setSelectedSurvey(surveyObj);
        props.navigation.navigate('Carnaval', { title: surveyObj.name });
    };

    const fetchData = async () => {
        try {
            const surveys = await getSurveys(user.uid);
            setUserSurveys(surveys);
        } catch (e) {
            console.log(e);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, []),
    );

    // Filtra as pesquisas com base no termo digitado no campo de busca
    const filteredSurveys = userSurveys.filter(survey => 
        survey.name.toLowerCase().includes(txtSearch.toLowerCase())
    );

    return (
        <View style={styles.container}>

            <View style={styles.cContent}>
                <SearchInput 
                    placeholder="Insira o termo de busca..." 
                    value={txtSearch} 
                    onChangeText={setTxtSearch} 
                />
                
                <ScrollView horizontal style={styles.cCards}>
                    {filteredSurveys.map(
                        survey => (
                            <CardResearch
                                key={survey.id}
                                title={survey.name}
                                img={survey.imageUrl}
                                date={survey.date}
                                onPress={() => handleCardPress(survey)}
                            />
                        ),
                    )}
                </ScrollView>

                <View style={styles.button}>
                    <Button 
                        txtButton="NOVA PESQUISA" 
                        buttonColor="#37BD6D" 
                        txtColor="#FFFFFF" 
                        functionButton={() => handleNavigate('NovaPesquisa')} 
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#372775',
    },
    cContent: {
        marginVertical: 15,
        paddingHorizontal: "3%"
    },
    cCards: {
        flexDirection: "row",
        height: 170,
        marginVertical: 18,
    },
    button: {
        marginVertical: 10
    }
})

export default Home;
