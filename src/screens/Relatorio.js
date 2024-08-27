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
                            { name: 'pessimo', population: ratings.pessimo, color: '#53D8D8', legendFontColor: "#FFFFFF" },
                            { name: 'ruim', population: ratings.ruim, color: '#EA7288', legendFontColor: "#FFFFFF" },
                            { name: 'neutro', population: ratings.neutro, color: '#5FCDA4', legendFontColor: "#FFFFFF" },
                            { name: 'bom', population: ratings.bom, color: '#6994FE', legendFontColor: "#FFFFFF" },
                            { name: 'excelente', population: ratings.excelente, color: '#F1CE7E', legendFontColor: "#FFFFFF" },
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
            <PieChart 
                width={500}
                height={325}
                backgroundColor={"transparent"}
                data={data}
                accessor={"population"}
                paddingLeft = {'8'}
                chartConfig={{
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#08130D",
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    strokeWidth: 2, 
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false 
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#372775',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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
