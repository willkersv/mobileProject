import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuButton = (props) => {

    const size = props.size
    const menuColor = props.menuColor

    return(
        <TouchableOpacity onPress={props.functionButton}>
            <Icon name="menu" size={size} color={menuColor}/>
        </TouchableOpacity>
    )
}

export default MenuButton