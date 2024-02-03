import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Forms from './components/Authentication/Form';
import Home from './pages/Home';
import Profile from './pages/Profile';
import {useSelector} from 'react-redux';
import User from './pages/User';
import Forgot from './components/Authentication/Forgot';
import ExpenseForm from './components/Expense/ExpenseForm';


function App() {

  const tok= useSelector(state=>state.auth.isLogged);
  return (
    <Router>
      <Routes>
        <Route path='/' element={tok ? (<Home/>) :
           (<Navigate replace to="/" element={ <Forms />}/>)}/>
        <Route path='/profile' element={tok ? (<Profile/>):
         (<Navigate replace to="/" element={ <Forms />}/>)}/>
         <Route path='/user' element={tok ? (<User/>):
         (<Navigate replace to="/" element={ <Forms />}/>)}/>
         <Route path='/expense' element={tok ? (<ExpenseForm/>):
         (<Navigate replace to="/" element={ <Forms />}/>)}/>
         <Route path='/forgot' element={<Forgot/>}/>
      </Routes>
    </Router>
  );
}

export default App;
