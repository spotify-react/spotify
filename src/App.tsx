
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { config } from './config';
import { apiService } from './Service/Service';
import getToken from './helpers/tokenHelper'

function App() {
  const [token, setToken] = useState<string | null>('');
  const [newRealese, setNewRealese] = useState<any>([]);
  
  useEffect(() => {
    setToken(getToken());
    apiService.getNewRealeses().then(res=> setNewRealese(res));
  }, [])

  console.log(newRealese)
  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  }

  return (
    <div className="App">
      {!token ?
        <a href={`${config.AUTH_ENDPOINT}?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}&response_type=${config.RESPONSE_TYPE}`}>Log in</a>
        : <button onClick={logout}>Logout</button>}
    </div>
  );
}

export default App;
