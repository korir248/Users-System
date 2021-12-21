import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from './components/main/Signup';
import Home from './components/Home';
import Login from "./components/main/Login"
import Error from './components/pages/Error';
import Admin from './components/pages/Admin';
import Header from './components/main/Header';
import Users from './components/pages/Users';
import SideBar from './components/mini components/SideBar';
import Projects from './components/pages/Projects';
import { useSelector } from 'react-redux'
import Tasks from './components/pages/Tasks';
import User from './components/pages/User';
import Project from './components/pages/Project';
import AdminRoutes from './components/AdminRoutes';


const App = ()=> {
  const {user} = useSelector(state => state.user)
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Routes>
      {/* <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/> */}
      {/* {!user.isAdmin && <Route path="/" element={<Home/>}/>} */}
      
    </Routes>
    
    {user?.isAdmin ? 
      <AdminRoutes/>
    : 
    <>
    <Routes>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>}
    </div>
    </BrowserRouter>
  );
}

export default App;
