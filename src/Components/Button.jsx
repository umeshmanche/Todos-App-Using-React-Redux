import "./css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../store/FormSlice";

const Button = () => {

    const formStore = useSelector(store => store.form);
    const dispatch = useDispatch();

    const manageForm = () => {
        dispatch(formActions.manageForm());
    }

    const display = formStore.display;

    return (
        <>
        <button onClick={() => manageForm()} style={{backgroundColor:display ? "#4D455D" : "green"}}>{display ? "Cancel":  "Add"}</button>
        </>
    );
}

export default Button