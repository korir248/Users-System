import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login"
import Users from './components/Users';
import Admin from './components/Admin';


const App = ()=> {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/users" element={<Users/>} />
      <Route path="/admin" element={ <Admin/>} />
    </Routes>
    

    </div>
    </BrowserRouter>
  );
}

export default App;
