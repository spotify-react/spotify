import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Main from './Components/Main/Main';

function App() {
  const loggedSelector = useSelector((state: any) => state.logged)
  return (
    <div className="App">
      <Routes>
        {loggedSelector === false ?
          <Route path='*' element={<Auth />}></Route>
          :
          <Route path='*' element={<Main />}></Route>
        }
      </Routes>
    </div>
  );
}

export default App;
