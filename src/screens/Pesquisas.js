import { View, Text, StyleSheet } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';

const Pesquisas = () =>{

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return(
        <View style={styles.container}>
            
        </View>
    )
}


export default Pesquisas;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: 20,
        paddingHorizontal: '20%'
    }
});