import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";
import CustomDrawer from "../components/CustomDrawer";
import Login from "./Login";
import Pesquisas from "./Pesquisas";
import NovaConta from "./NovaConta";
import * as ScreenOrientation from "expo-screen-orientation";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useFonts } from "expo-font";
import Coleta from "./Coleta";

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#2B1D62", width: "40%" },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <DrawerNavigator.Screen
        name="Pesquisas"
        component={Pesquisas}
        options={{
          headerStyle: {
            backgroundColor: "#2B1D62",
          },
          headerTitleStyle: {color: '#FFFFFF', fontSize: 25, fontFamily: 'AveriaLibre'},
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#2B1F5C",
          drawerInactiveBackgroundColor: "#2B1F5C",
          drawerLabel: () => <Text style={styles.label}>Home</Text>,
          drawerIcon: () => (
            <Icon
              style={styles.icon}
              name="description"
              size={32}
              color="#FFFFFF"
            />
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  label: {
    fontFamily: "AveriaLibre",
    fontSize: 24,
    color: "white",
  },
  nav: {
    backgroundColor: "#2B1D62",
  },
  icon: {
    marginLeft: 24,
    marginRight: -24,
  },
});
