import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navbar from './Navbar';
import BottomNav from './BottomNav';

export default function App() {
  return (
    <PaperProvider>
      <Navbar></Navbar>
    <BottomNav></BottomNav>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
