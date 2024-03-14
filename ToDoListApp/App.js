import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ToDoList} from './ToDoList';
import {ToDoForm} from '.ToDdoForm';

export default function App() {


  const [tasks, setTasks] = useState ([
    {id:1 , text: 'Do Laundry', isCompleted: false },
    {id:2 , text: 'Go to Gym' , isCompleted: false },
    {id:3 , text: 'Walk dog' , isCompleted: true }, 
  ]);

  const addTask = (text) => {
    const newTask = {
      id:tasks.length +1,
      text,
      isCompleted: false,
    };

    return (
      <View style={StyleSheet.container}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical:30,
    },
  });
}


