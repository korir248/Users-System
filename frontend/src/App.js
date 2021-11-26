import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login"
import Error from './components/Error';
import Admin from './components/Admin';
import Header from './components/Header';


const App = ()=> {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/users" element={<Users/>} /> */}
      <Route path="/admin" element={ <Admin/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    

    </div>
    </BrowserRouter>
  );
}

export default App;
