
import './App.css';
import { Home1 } from './Home1';
import Login from './Login';
import Signup from './SignUp';
import Main from './Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
