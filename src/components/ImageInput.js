import { StyleSheet, Text, View, Image } from 'react-native';

const ImageInput = (props) => {
    const ctx = props.ctx || 'image'

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Imagem</Text>
            </View>
            <View style={styles.cImageInput}>
                {ctx === 'image' ? (
                    <>
                        <Image style={styles.image} label='Imagem' source={require('../../assets/images/Imagem_projeto.png')} />
                    </>
                ) : (
                    <Text style={styles.txt}>Câmera/Galeria de imagens</Text>
                )}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 5,
    },
    cImageInput: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        width:250,
        height:75,
    },
    label: {
        fontFamily: "AveriaLibre",
        textAlign: "left",
        fontSize: 20,
        color: "#FFFFFF",
        marginBottom: 2
    },
    image: {
        width:250,
        height:75,
    },
    txt: {
        fontFamily: "AveriaLibre",
        textAlign: "center",
        fontSize: 16,
        color: "#939393"
    }
})

export default ImageInput