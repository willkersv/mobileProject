import { View, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";

import ChartInfo from "../components/ChartInfo";

const Relatorio = () => {

    const img = require('../../assets/images/chartImg.png')

    const [fontsLoaded] = useFonts({
        AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    //Codigo
    return (
        <View style={styles.container}>
            <View style={styles.chart}>
                <Image style={styles.imgStyle} source={img}/> 
            </View>
            <View style={styles.cChartInfo}>
                <ChartInfo squareColor="#F1CE7E" infoTxt="Excelente" />
                <ChartInfo squareColor="#6994FE" infoTxt="Bom" />
                <ChartInfo squareColor="#5FCDA4" infoTxt="Neuto" />
                <ChartInfo squareColor="#EA7288" infoTxt="Ruim" />
                <ChartInfo squareColor="#53D8D8" infoTxt="Pessimo" />
            </View>
        </View>
    );
};

//Estilo do codigo
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#372775",
        paddingHorizontal: "20%"
    },
    chart: {
        width: "65%",
        height: "65%",
        alignItems: "center"
    },
    imgStyle: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    cChartInfo:{
        flex: 1,
        flexDirection: "column",
        padding: 10
    }
});

export default Relatorio;