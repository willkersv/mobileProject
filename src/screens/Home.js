import { View, Text, StyleSheet } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';

const Home = () =>{

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return(
        <View style={styles.container}>
    
        </View>
    )
}

export default Home;

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