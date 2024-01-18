import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Forms from './components/Form';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Token from './Store/TokenContext';
import { useContext } from 'react';

function App() {
  const tok=useContext(Token);
  console.log(tok);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Forms/>}/>
        <Route path='/home' element={tok.isLoggedin ? (<Home/>) :
           (<Navigate replace to="/" element={ <Forms />}/>)}/>
        <Route path='/profile' element={tok.isLoggedin ? (<Profile/>):
         (<Navigate replace to="/" element={ <Forms />}/>)}/>
      </Routes>
    </Router>
  );
}

export default App;
