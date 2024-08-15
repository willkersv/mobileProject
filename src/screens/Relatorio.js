import { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import app from '../config/firebase';
import { useSurvey } from '../contexts/SurveyContext';
import ChartInfo from '../components/ChartInfo';

const db = getFirestore(app);

const Relatorio = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { selectedSurvey } = useSurvey();

    useEffect(() => {
        const fetchData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
                setError('Usuário não autenticado.');
                setLoading(false);
                return;
            }

            const userId = user.uid;
            const surveyId = selectedSurvey?.id;

            if (!surveyId) {
                setError('ID da pesquisa não encontrado.');
                setLoading(false);
                return;
            }

            try {
                const surveyRef = doc(db, 'users', userId, 'surveys', surveyId);
                const surveyDoc = await getDoc(surveyRef);

                if (surveyDoc.exists()) {
                    const ratings = surveyDoc.data().ratings;

                    if (ratings) {
                        const data = [
                            { key: 'pessimo', value: ratings.pessimo, svg: { fill: '#53D8D8' }, arc: { outerRadius: '115%', cornerRadius: 10, } },
                            { key: 'ruim', value: ratings.ruim, svg: { fill: '#EA7288' } },
                            { key: 'neutro', value: ratings.neutro, svg: { fill: '#5FCDA4' } },
                            { key: 'bom', value: ratings.bom, svg: { fill: '#6994FE' } },
                            { key: 'excelente', value: ratings.excelente, svg: { fill: '#F1CE7E' } },
                        ];

                        const totalReactions = ratings.pessimo + ratings.ruim + ratings.neutro + ratings.bom + ratings.excelente;

                        if (totalReactions === 0) {
                            setError('Nenhuma reação encontrada na pesquisa.');
                        } else {
                            setData(data);
                        }
                    } else {
                        setError('Dados de avaliação não encontrados.');
                    }
                } else {
                    setError('Nenhuma pesquisa encontrada.');
                }
            } catch (error) {
                console.error('Erro ao obter dados da pesquisa:', error);
                setError('Erro ao obter dados da pesquisa.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedSurvey]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    if (data.length === 0) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Nenhum dado disponível para exibição.</Text>
            </View>
        );
    }

    return (
        
        <View style={styles.container}>
            {/* <PieChart 
                width={500}
                height={325}
                //outerRadius={'68%'}
                //innerRadius={10}
                data={data}
            /> */}
            <View style={styles.secondContainer}>
                <ChartInfo squareColor="#F1CE7E" infoTxt="Excelente" />
                <ChartInfo squareColor="#6994FE" infoTxt="Bom" />
                <ChartInfo squareColor="#5FCDA4" infoTxt="Neutro" />
                <ChartInfo squareColor="#EA7288" infoTxt="Ruim" />
                <ChartInfo squareColor="#53D8D8" infoTxt="Pessimo" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#372775',
        flexDirection: 'row',
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#372775',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#372775',
    },
    errorText: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 25,
    },
    secondContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
    },
    legend:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    square: {
        width: 25,
        height: 25,
        backgroundColor: '#F1CE7E',
    },
});

export default Relatorio;