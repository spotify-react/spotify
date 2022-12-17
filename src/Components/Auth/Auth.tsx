import "./Auth.css";
import { useEffect, useState } from 'react';
import { config } from "../../config";
import { apiService } from "../../Service/Service";
import { useDispatch, useSelector } from "react-redux";
import { setLogged } from "../../app/LoggedSlice";



function Auth(): JSX.Element {
    const [token, setToken] = useState<string | null>('');
    const [newRealese, setNewRealese] = useState<any>([]);
    const LoggedSelector = useSelector((state: any) => state.logged)
    const dispatch = useDispatch()

    const getToken = () => {
        const hash: string | null = window.location.hash;
        let token: any = window.localStorage.getItem('token');

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1];
            window.location.hash = '';
            window.localStorage.setItem("token", token);
        }

        setToken(token);
    }

    useEffect(() => {
        if (!token) {
            getToken()
            dispatch(setLogged(false))
        } else {
            apiService.getNewRealeses().then(res => setNewRealese(res));
            dispatch(setLogged(true))
        }
    }, [token])

  

    return (
        <div className="Auth">
            <a href={`${config.AUTH_ENDPOINT}?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}&response_type=${config.RESPONSE_TYPE}`}>Log in</a>
        </div>
    );
}

export default Auth;
