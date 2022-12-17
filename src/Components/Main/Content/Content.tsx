import { Route, Routes } from "react-router-dom";
import "./Content.css";

function Content(): JSX.Element {
    return (
        <div className="Content">
			<Routes>
                <Route path="/home" element={'home'}></Route>
                <Route path="/library" element={'library'}></Route>
                <Route path="/playlists" element={'playlists'}></Route>
            </Routes>
        </div>
    );
}

export default Content;
