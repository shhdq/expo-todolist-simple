import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // add task
  const handleAddTask = () => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: task },
    ]);
    setTask("");
  };

  // delete task
  const handleDeleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new task..."
          value={task}
          onChangeText={(text) => setTask(text)} // Fixed here
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
            <Button
              title="Delete"
              onPress={() => handleDeleteTask(itemData.item.id)} // Fixed here
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#ff0000",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
