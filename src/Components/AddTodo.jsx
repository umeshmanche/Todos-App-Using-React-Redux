import "./css/todo-form.css"
// import Button from "./Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { TodoActions } from "../store/TodoSlice";
import { v4 as uuid } from 'uuid';
import { formActions } from "../store/FormSlice";

const AddTodo = () => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

    const AddTodo = (e) => {
        e.preventDefault();

        if(!formData.title) {
            alert("Title shouldn't be empty!!");
            return;
        }

        const newTodo = {...formData, id: uuid()}

        dispatch(TodoActions.addTask(newTodo));
        console.log("saved!!");

        setFormData({
            title: "",
            dateAndTime: "",
            reminder: false
        })

        // hiding todo form 
        dispatch(formActions.manageForm());
    }

    const onChangeHandler = (event) => {
        if(event.target.name === "reminder") {
            setFormData({
                ...formData,
                [event.target.name]: event.target.checked
            })
        }
        else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            })
        }
    }

    return (
        <div className="todo-form">
            <form >
                <label >Title</label>
                <input type="text" name="title" placeholder="Add todo" onChange={onChangeHandler}/>
                <label >Date & Time</label>
                <input type="text" name="dateAndTime" placeholder="Date and time" onChange={onChangeHandler}/>
                <label >
                    Set Reminder
                    <input type="checkbox" name="reminder" style={{width:"fit-content"}} onChange={onChangeHandler}/>
                </label>
                <button onClick={AddTodo}>Save</button>
            </form>
        </div>
    )
}

export default AddTodo;