import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enterGoal, setEnterGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enterGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.input}>
        <TextInput placeholder="Course Goal" style={styles.inputContainer}
          onChangeText={goalInputHandler} value={enterGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map(goal => <Text key={goal}>{goal}</Text>)}
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
