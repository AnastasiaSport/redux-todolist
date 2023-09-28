import React from 'react';
import {connect} from "react-redux";
import Task from "./Task";
import AddNewTask from "./AddNewTask";

const TodoList = ({todoList}) => {


    return (
        <div>
            <AddNewTask/>
            {todoList.map((el, index) =>
            <Task task={el} key={el.id}
                  index={index}
            />
            )}
        </div>
    );
};
const mapStateToProps = (state) =>({
    todoList: state.todoList
})

export default connect(mapStateToProps)(TodoList);