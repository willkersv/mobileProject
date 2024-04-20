import { View, Text, StyleSheet, Button, Touchable } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/MaterialIcons';


const CustomDrawer = (props) => {

  const {email} = props

  const [fontsLoaded] = useFonts({
    'AveriaLibre': require('../../assets/fonts/AveriaLibre-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.cTxt}>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.lineStyle} />
      <DrawerItemList {...props} />
      <DrawerItem
        style={{marginTop:150, marginBottom:30}}
        labelStyle={styles.item}
        icon= {() => <Icon style={styles.icon} name='logout' size={32} color="#FFFFFF"/>}
        label="Sair" 
        onPress={() => { props.navigation.popToTop() }}
      />
        
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 20,
  },
  email: {
    fontFamily: 'AveriaLibre',
    fontSize: 24,
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 5
  },
  item: {
    fontFamily: 'AveriaLibre',
    fontSize: 24,
    color: '#FFFFFF',
  },
  icon:{
    marginLeft:24, 
    marginRight:-24
  },
  cTxt:{
    marginTop: 10
  }
});

export default CustomDrawer;