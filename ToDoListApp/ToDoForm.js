import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {styles as commonStyles} from '../App';

const ToDoForm = ({ addTask}) => {
    const [text, setText] = React.useState('');

    const handleAddTask= () => {
        if (text.trim()) {
            addTask(text.trim());
            setText('');
        }
    };

    return (
        <View style={[commonStyles.form, styles.form]}>
            <TextInput 
            style={[commonStyles.input, styles.input]}
            placeholder="Add a new task..."
            value={text}
            onChangeText={setText}
            />
            <Button title="Add" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        marginBottom:20,
    },
});

export {ToDoForm};