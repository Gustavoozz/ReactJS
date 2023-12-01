import './App.css';
import Rotas from './Routes/Rotas'
import { UserContext } from './context/AuthContext';
import { useEffect, useState } from 'react';

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token")

    setUserData(token === null ? {} : JSON.parse(token));
  }, []);


  return (
    <UserContext.Provider value={{userData, setUserData}}>
    <Rotas />
    </UserContext.Provider>
  );
}

export default App;
