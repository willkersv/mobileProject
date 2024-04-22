import {View, Text, StyleSheet, Modal} from "react-native";
import Button from '../components/Button.js';

const PopUp = ({modalVisible, closeModal}) => {

  return(
        <View style={styles.centralized}>
          <Modal animationType="fade" transparent={true}
            visible={modalVisible}onRequestClose={() => {
              closeModal();
            }}>
            <View style={styles.modalBackground}>
              <View style={styles.modal}>
                <Text style={styles.modalText}>Tem certeza de apagar essa pesquisa?</Text>
                <View style={styles.container}>
                  <View style={styles.buttonSim}>
                    <Button txtButton="SIM" buttonColor="#FF8383" txtColor="#FFFFFF" buttonHeight={71}/>
                  </View>
                  <View style={styles.buttonCancelar}>
                    <Button txtButton="CANCELAR" buttonColor="#3F92C5" txtColor="#FFFFFF" buttonHeight={71} functionButton={closeModal}/>  
                  </View>
                </View>
              </View>
            </View>
          </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
  centralized: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modal: {
    width: 480,
    height: 200,
    backgroundColor: '#2B1F5C',
    alignItems: 'center',
    paddingTop: 15,
    padding: 25,
    elevation: 5,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 0,
  },
  buttonSim:{
    paddingRight: 20,
    width: 201
  },
  buttonCancelar:{
    width: 201
  },
  modalText: {
    color: 'white',
    fontFamily: "AveriaLibre", 
    fontSize: 26,
    marginBottom: 14,
    textAlign: 'center',
  },
});

export default PopUp;