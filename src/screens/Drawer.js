import { useState, useEffect  } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import CustomDrawer from '../components/CustomDrawer'; 
import Home from './Home';
import * as ScreenOrientation from 'expo-screen-orientation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {

    //Variáveis
    const [userEmail, setUserEmail] = useState('');

    //Chamado apenas quando o componente é montado
    useEffect(() => {
        getEmailUser();
    }, []);

    const getEmailUser = () => {
        //provisorio
        setUserEmail("usuario@dominio.com");
    }

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    const [fontsLoaded] = useFonts({
        'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
      });
    
      if(!fontsLoaded) {
        return null
      }

    return(
        <DrawerNavigator.Navigator 
            screenOptions={{drawerStyle:{backgroundColor:'#2B1F5C', width:'40%'}}}
            drawerContent={(props) => <CustomDrawer {...props} email={userEmail} />}
        >
        <DrawerNavigator.Screen 
            name="Home" 
            component={Home} 
            options={
                {
                    headerStyle:{
                        backgroundColor: '#2B1F5C',
                    },
                    headerTintColor: '#FFFFFF',
                    
                    drawerActiveBackgroundColor:'#2B1F5C',
                    drawerInactiveBackgroundColor:'#2B1F5C',
                    title: null,
                    drawerLabel: () => <Text style={styles.label}>Pesquisas</Text>,
                    drawerIcon: () => <Icon style={styles.icon} name='description' size={32} color="#FFFFFF"/>,
                }
            }
        />
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