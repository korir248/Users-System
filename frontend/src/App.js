import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login"


const App = ()=> {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    

    </div>
    </BrowserRouter>
  );
}

export default App;
