import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

const CardResearch = (props) => {
    const img = props.img
    const title = props.title
    const date = props.date
    const page = props.page

    return(
        <View style={styles.cCard}>
            <TouchableOpacity style={styles.card} onPress={() => props.onPress(page)}>
                <Image style={styles.imgStyle} source={{uri:img}}/>
                <View style={styles.cTxt}>
                    <Text style={styles.txtTitle}>{title}</Text>
                    <Text style={styles.txtDate}>{date}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    cCard:{
        height: 170,
        width: 190,
        marginRight: 25,
    },
    card:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        backgroundColor:"#FFFFFF",
        borderRadius: 20,

        shadowColor: "#000000",
        shadowOpacity: 0.75,
        elevation: 9,

        padding: 10,
    },
    cTxt:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    imgStyle:{
        height: "60%",
        width: "60%",
        margin: 5
    },
    txtTitle:{
        color: "#419ED7",
        fontFamily: "AveriaLibre",
        fontSize: 24,
    },
    txtDate:{
        color: "#aaaaaa",
        fontFamily: "AveriaLibre",
        fontSize: 14
    }
})

export default CardResearch