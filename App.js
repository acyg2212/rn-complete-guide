import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enterGoal, setEnterGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), value: enterGoal }]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.input}>
        <TextInput placeholder="Course Goal" style={styles.inputContainer}
          onChangeText={goalInputHandler} value={enterGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList data={courseGoals} renderItem={itemData => (
        <View style={styles.listItem}>
          <Text >{itemData.item.value}</Text>
        </View>
      )}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    width: 200,
    padding: 10
  },
  input: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
