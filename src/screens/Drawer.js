import {createDrawerNavigator} from '@react-navigation/drawer';
import { View, Text, StyleSheet } from "react-native";
import CustomDrawer from '../components/CustomDrawer'; 
import Pesquisas from './Pesquisas';
import * as ScreenOrientation from 'expo-screen-orientation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    const [fontsLoaded] = useFonts({
        'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
      });
    
      if(!fontsLoaded) {
        return null
      }

    return(
        <DrawerNavigator.Navigator 
        screenOptions={{drawerStyle:{backgroundColor:'#2B1D62', width:'40%'}}}
        drawerContent={(props) => <CustomDrawer {...props} />}>
            <DrawerNavigator.Screen 
                name="Pesquisas" 
                component={ Pesquisas } 
                options={
                    {
                        headerStyle:{
                            backgroundColor: '#2B1D62',
                        },
                        headerTintColor: 'white',
                        drawerActiveBackgroundColor:'#2B1F5C',
                        drawerInactiveBackgroundColor:'#2B1F5C',
                        title: null,
                        drawerLabel: () => <Text style={styles.label}>Pesquisas</Text>,
                        drawerIcon: () => <Icon style={styles.icon} name='description' size={32} color="#FFFFFF"/>,
                        }}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer;

const styles = StyleSheet.create({
    label:{
        fontFamily:'AveriaLibre',
        fontSize:24, 
        color: 'white'
     },
     nav:{
        backgroundColor: '#2B1D62',
     },
     icon:{
        marginLeft:24, 
        marginRight:-24
    }
   });