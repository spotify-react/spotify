import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <nav className="side-bar">
                <ul>
                    <li className="active">
                        <NavLink to={'/home'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/library'}>Library</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/playlists'}>Playlists</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
