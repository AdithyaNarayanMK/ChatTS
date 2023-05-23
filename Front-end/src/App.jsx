import MainApp from "./Components/MainApp";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Components/Login';
// import Chat from './Components/Chat'
import Home from "./Components/Home";

export default function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<MainApp/>}/>
                <Route path="/home" element={<Home/>}/>
                {/* <Route path="/signin" element={<Login />}/>
                <Route path="/chat" element={<Chat />}/> */}
            </Routes>
    </Router>
    </div>
  );
}
