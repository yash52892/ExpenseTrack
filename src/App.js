import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Forms from './components/Authentication/Form';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Token from './Store/TokenContext';
import { useContext } from 'react';
import User from './pages/User';
import Forgot from './components/Authentication/Forgot';
import ExpenseForm from './components/Expense/ExpenseForm';

function App() {
  const tok=useContext(Token);
  return (
    <Router>
      <Routes>
        {!tok.isLoggedin && <Route path='/' element={<Forms/>}/>}
        <Route path='/home' element={tok.isLoggedin ? (<Home/>) :
           (<Navigate replace to="/" element={ <Forms />}/>)}/>
        <Route path='/profile' element={tok.isLoggedin ? (<Profile/>):
         (<Navigate replace to="/" element={ <Forms />}/>)}/>
         <Route path='/user' element={tok.isLoggedin ? (<User/>):
         (<Navigate replace to="/" element={ <Forms />}/>)}/>
         <Route path='/expense' element={tok.isLoggedin ? (<ExpenseForm/>):
         (<Navigate replace to="/" element={ <Forms />}/>)}/>
         <Route path='/forgot' element={<Forgot/>}/>
      </Routes>
    </Router>
  );
}

export default App;
