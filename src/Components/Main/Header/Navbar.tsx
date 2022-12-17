import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <div className="side-bar">
                <ul>
                    <li className="active">
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/library'}>Library</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/playlist'}>Playlists</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
