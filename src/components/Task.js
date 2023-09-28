import React, {useState} from 'react';
import {connect} from "react-redux";
import {Box, Checkbox, IconButton, Text, Button, Input} from "@chakra-ui/react";
import MyButton from "./ui/button/MyButton";

const Task = (props) => {
    const [editedTaskName, setEditedTaskName] = useState(props.task.name)

    return (

        <Box display='flex' alignItems='center' justifyContent='space-between' py={3}>
            <MyButton onClick={() => props.moveTask(props.index, -1)}
            disabled={props.index === 0}
            > ↑ </MyButton>
            <MyButton onClick={() => props.moveTask(props.index, +1)}
                      disabled={props.index === props.length - 1}
            > ↓ </MyButton>

            <Checkbox isChecked={props.task.completed}
                      onChange={() => props.toggleTask(props.task.id, !props.task.completed)}
            >
                <Text textDecoration={props.task.completed ? 'line-through' : 'none'}>{props.task.name}</Text>
            </Checkbox>


            <Input
                value={editedTaskName}
                onChange={e => setEditedTaskName(e.target.value)}
            />
            <Button colorScheme='teal' variant='outline'
                    onClick={() => props.editeTask(props.task.id, editedTaskName)}
            >
                Edit
            </Button>
            <Button colorScheme='teal' variant='outline'
                    onClick={() => setEditedTaskName(props.task.name)}
            >
                Cancel
            </Button>

            <Button colorScheme='teal' variant='outline' onClick={() => props.deleteTask(props.task.id)}>
                Delete
            </Button>


        </Box>
    );
};
const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch({
        type: 'DELETE_TASK',
        payload: id
    }),
    editeTask: (id, newName) => dispatch({
        type: 'EDIT_TASK',
        payload: {
            id: id,
            name: newName,
            completed: false
        }
    }),
    toggleTask: (id, completed) => dispatch({
        type: 'TOGGLE_TASK',
        payload: {
            id: id,
            completed
        }
    }),

    moveTask: (index, direction) => dispatch({
        type: 'MOVE_TASK',
        payload: {
            index,
            direction
        }
    })
})
const mapStateToProps = (state) => ({
    length: state.todoList.length
})


export default connect(mapStateToProps, mapDispatchToProps)(Task);