import {FaTimes }from "react-icons/fa";
import "./css/todo.css"
import { useDispatch } from "react-redux";
import { TodoActions } from "../store/TodoSlice";

const Todo = ({todo}) => {

    const dispatch = useDispatch();

    const removeTodo = (id) => {
        dispatch(TodoActions.deleteTask({id}));
    }

    const manageReminder = (id) => {
        dispatch(TodoActions.manageReminder({id}));
    }

    return (
        <div key={todo.id} className={todo.reminder ? "todo reminder" : "todo"} onDoubleClick={() => manageReminder(todo.id)}>
            <h3>{todo.title} <FaTimes color="red" onClick={() => removeTodo(todo.id)}/></h3>
            <p>{todo.dateAndTime}</p>
        </div>
    );
}

export default Todo;