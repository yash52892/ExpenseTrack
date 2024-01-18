import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forms from './components/Form';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Forms/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
