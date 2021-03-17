import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.input}>
        <TextInput placeholder="Course Goal" style={styles.inputContainer} />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 40,
    width: 200,
    padding: 10
  },
  input: {
    flexDirection: 'row',
    justifyContent: "space-between"
  }
});
