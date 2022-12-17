import Content from "./Content/Content";
import Navbar from "./Header/Navbar";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Navbar />
            <Content />
        </div>
    );
}

export default Main;
