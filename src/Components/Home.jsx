import Header from "./Header"
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Todo from "./Todo";
import "./css/home.css"
import "./css/todosList.css"

const Home = () => {

    const formStore = useSelector(store => store.form);
    const todoStore = useSelector(store => store.todos);
    const todos = todoStore.todosList;

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
        </div>
    );
}

export default Home;