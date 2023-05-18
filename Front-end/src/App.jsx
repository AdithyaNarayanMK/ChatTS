import MainApp from "./Components/MainApp";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'

export default function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<MainApp/>}/>
                <Route path="/signin" element={<Login />}/>
            </Routes>
    </Router>
    </div>
  );
}
