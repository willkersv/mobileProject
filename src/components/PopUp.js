import {View, Text, StyleSheet, Modal} from 'react-native';
import Button from '../components/Button.js';

const PopUp = ({modalVisible, closeModal, modalAction}) => {
  const deleteResearch = () => {
    modalAction();
    closeModal();
  };

  return (
    <View style={styles.centralized}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          closeModal();
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              Tem certeza de apagar essa pesquisa?
            </Text>
            <View style={styles.container}>
              <Button
                text="SIM"
                textColor="white"
                backgroundColor="#FF8383"
                onPress={deleteResearch}
              />
              <Button
                text="NÃO"
                textColor="white"
                backgroundColor="#3f92c5"
                onPress={closeModal}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centralized: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
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
    justifyContent: 'center',
    padding: 25,
    elevation: 5,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 15,
  },
  buttonSim: {
    paddingRight: 20,
    width: 201,
  },
  buttonCancelar: {
    width: 201,
  },
  modalText: {
    color: 'white',
    fontSize: 26,
    marginBottom: 14,
    textAlign: 'center',
  },
});

export default PopUp;