import {React,useState} from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [login,setLogin] = useState(false) // if logged in or not
  const [anonymity,setAnonymity] = useState(false) //anonymous or not
  return (
    <div className="App">
      <Navbar 
        login = {login} 
        setLogin = {setLogin}
        anonymity = {anonymity}
        setAnonymity = {setAnonymity}
      />
      <Form/>
      <Display/>
    </div>
  );
}

export default App;
