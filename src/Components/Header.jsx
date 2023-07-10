import Button from "./Button";
import "./css/style.css"

const Header = () => {
    return (
        <h1 className="header">
            Todo's Application
            {
                <Button />
            }
        </h1>
    );
}

export default Header;