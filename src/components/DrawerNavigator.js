import {View, Icon, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-native/drawer';

const DrawerNavigator = (props) => {
    return(
        <DrawerContentScrollView{...props}>
            <View style={{borderBottomColor:'#ECF8FF', borderBottomWidth:'2px'}}>
                <Text style={{fontSize:12, color: 'white', alignSelf: 'center'}}>usuario@dominio.com</Text>
            </View>
            <DrawerItemList {...props}/>
            <DrawerItem labelstyle={{color:'white'}} icon='' label="Pesquisas" onPress={() => {props.navigation.push('Pesquisas'); props.navigation.closeDrawer()}}/>
            <DrawerItem labelstyle={{color:'white'}} icon='' label="Sair" onPress={() => {props.navigation.popToTop()}}/> 

        </DrawerContentScrollView>
    )
}

export default DrawerNavigator;