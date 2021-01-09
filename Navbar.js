import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Navbar = () => (
    <Appbar.Header>
       <Appbar.Content title="Todo List" subtitle={'Welcome to the app!'} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
);

export default Navbar;