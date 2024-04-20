import { View, Text, StyleSheet } from 'react-native'

const ChartInfo = (props) => {

    const squareColor = props.squareColor
    const infoTxt = props.infoTxt

    return(
        <View style={styles.chartInfo}>
            <View style={styles.square(squareColor)}/>
            <Text style={styles.infoTxt}>{infoTxt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    chartInfo: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10
    },
    square: (squareColor) => ({
        height: 25,
        width: 25,
        backgroundColor: squareColor
    }),
    infoTxt: {
        fontFamily: "AveriaLibre",
        fontSize: 24,
        paddingLeft: 5,
        color: "#FFFFFF",
    }
})

export default ChartInfo