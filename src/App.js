import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Forms from "./components/Authentication/Form";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import User from "./pages/User";
import Forgot from "./components/Authentication/Forgot";
import ExpenseForm from "./components/Expense/ExpenseForm";
import Layout from "./pages/Layout";

function App() {
  const tok = localStorage.getItem("id");

  return (
    <Router>
      <Routes>
        <Route path="/sign" element={<Forms/>}></Route>
        <Route path="/" element={tok ? <Layout /> : <Navigate to="/sign"/>}>
          <Route path="/home" element={tok ? <Home /> : <Navigate to="/sign"/>}/>
          <Route path="/profile" element={tok ? <Profile /> : <Navigate to="/sign"/>}/>
          <Route path="/user" element={tok ? <User /> : <Navigate to="/sign"/>}/>
          <Route path="/expense" element={tok ? (<ExpenseForm />) : (<Navigate to="/sign" />)}/>
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
