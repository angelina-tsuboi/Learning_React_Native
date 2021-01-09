import * as React from 'react';
import { Modal, Portal, Text, Button, Provider, TextInput } from 'react-native-paper';

const CreateModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [itemName, setItemName] = React.useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, height: '40rem', width: '35rem', margin: 'auto'};

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Create a Todo Item</Text>
          <TextInput
            label="Item Name"
            value={itemName}
            onChangeText={text => setItemName(text)}
        />
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
           Create Item
        </Button>

        </Modal>
      </Portal>
      <Text>Your Todolist</Text>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
};

export default CreateModal;