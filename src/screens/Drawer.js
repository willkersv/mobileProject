import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigator from '../DrawerNavigator' 
import Home from './Home';

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return(
        <DrawerNavigator.Navigator 
        screenOptions={{drawerActiveBackgroundColor:'#2B1D62', 
        drawerLabelStyle:{color:'white'}, drawerStyle:{backgroundColor:'#2B1D62', width:'60%'}}} 
        drawerContent={(props)=><DrawerNavigator{...props}/>}>
            <DrawerNavigator.Screen name="Home" component={Home} options={{drawerActiveBackgroundColor:'#2B1D62'}}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer;