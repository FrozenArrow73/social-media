import './App.css';
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Home from "./screens/Home"
import Login from "./screens/Login"
import Register from "./screens/Register"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
