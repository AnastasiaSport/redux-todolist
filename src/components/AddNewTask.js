import React, {useState} from 'react';
import {Button, Input, Stack} from "@chakra-ui/react";
import {connect} from "react-redux";
import MyButton from "./ui/button/MyButton";
import MyInput from "./ui/input/MyInput";


const AddNewTask = ({createTask}) => {
    const [inputTaskName, setInputTaskName] = useState('');
    const submit = () => {
        createTask({name: inputTaskName, id: Date.now()})
        setInputTaskName('')
    }
    return (

        <div>
            <Stack direction='row' spacing={4} alignItems='center' justifyContent='center'>
                <MyInput
                    required
                    placeholder='Enter new task'
                    value={inputTaskName}
                    onChange={(e) => setInputTaskName(e.target.value)}

                />
                <MyButton
                        onClick={submit}
                        disabled={!inputTaskName}
                >Add</MyButton>
            </Stack>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    createTask: (newTask) => dispatch({
        type: 'CREATE_TASK',
        payload: newTask
    })
})
export default connect(null, mapDispatchToProps)(AddNewTask);