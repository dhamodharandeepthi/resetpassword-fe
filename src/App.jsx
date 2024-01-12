import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import NoPage from './pages/NoPage';


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/*" element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App