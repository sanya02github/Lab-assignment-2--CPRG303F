
import React from 'react';
import {Pressable, View, Text, StleSheet} from 'react-native';
import {stles as commonStyles} from '../App';

const Task = ({task, onPress}) => (
    <Pressable onPress= {onPress} style={[commonStyles.task, task.isCompleted && commonStyles.completed]}>
        <Text styles={commonStyles.taskText}>{task.Text}</Text>
    </Pressable>
);

const styles= StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
});

export {Task};



















