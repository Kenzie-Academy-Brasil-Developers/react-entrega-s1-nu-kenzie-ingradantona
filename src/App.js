import { useState } from 'react';
import Index from './components/inicial';
import Home from './components/home';
import './App.css';
import './reset.css'
import './base.css'

function App() {
  const [login, setLogin] = useState(false)

  return (
    <>
      {login ? (
        <Home setlogin={setLogin}/>
      ):(
        <Index setlogin={setLogin}/>
      )}
    </>
  );
}

export default App;
