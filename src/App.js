import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forms from './components/Form';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TokenProvider from './Store/TokenProvider';

function App() {
  return (
    <TokenProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Forms/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
    </TokenProvider>
  );
}

export default App;
