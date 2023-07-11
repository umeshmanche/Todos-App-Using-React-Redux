import Header from "./Header"
import AddTodo from "./AddTodo";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import "./css/home.css"
import "./css/todosList.css"
import { TodoActions } from "../store/TodoSlice";
import { useEffect } from "react";


const Home = () => {
    const dispatch = useDispatch();
    const formStore = useSelector(store => store.form);
    const todoStore = useSelector(store => store.todos);
    const todos = todoStore.todosList;
    
    useEffect(() => {
        onReload();
    }, []);
    
    const onReload = () => {
        const list = JSON.parse(localStorage.getItem("todos"));
        dispatch(TodoActions.fetchTasksFromLocalStorage(list));
    }

    return (
        <div className="home">
            <Header />
            {formStore.display && <AddTodo />}
            <div className="todosList" style={{maxHeight: formStore.display ? "42vh" : "75vh"}}>
                {todos.length === 0 
                    ? !formStore.display && <h3>No Tasks!</h3>  
                    :  todos.map(
                        t => <Todo key={t.id} todo={t}/> 
                    )
                }
            </div>
            <a href="http://github.com/umeshmanche/Todos-App-Using-React-Redux" target="_blank">Check out the Github Repository.</a>
        </div>
    );
}

export default Home;