import todoList from "../components/TodoList";

const initialState = {
    appHeader: 'To Do List',
    todoList: [
        {
            id: 1,
            name: 'Learn Redux',
            completed: false
        },
        {
            id: 2,
            name: 'Learn Redux_server',
            completed: false
        }
    ]
}
const reducer = (state = initialState, action) =>{
    switch (action.type){
        case 'CREATE_TASK':
            return {...state, todoList: [...state.todoList, action.payload]};
        case 'EDIT_TASK':
                return {...state, todoList: state.todoList.map(el =>
                        el.id === action.payload.id ? {...el, name: action.payload.name} : el

                    )};
        case 'DELETE_TASK':
            return {...state, todoList: state.todoList.filter(el => el.id !== action.payload)};

        case 'TOGGLE_TASK':
            return {...state, todoList: state.todoList.map(el =>
                el.id === action.payload.id ? {...el, completed: action.payload.completed} : el
                )};
        case 'MOVE_TASK':
            console.log(action.payload)
            const newToDoList = [...state.todoList]
            const movedTask = newToDoList[action.payload.index]
            newToDoList[action.payload.index] = newToDoList[action.payload.index + action.payload.direction]
            newToDoList[action.payload.index + action.payload.direction] = movedTask
            return {...state, todoList: newToDoList}
        default:
            return state;
    }
}
export default reducer;