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
    <>
    <div className="admin-page">

    <SideBar/>
    <Routes>      
      {/* <Route path="/users" element={<Users/>} /> */}
      <Route path="/admin" element={ <Admin/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/admin/users" element={<Users/>}/>
      <Route path="/admin/projects" element={<Projects/>}/>
      <Route path="/admin/tasks" element={<Tasks/>}/>
      <Route path="/admin/users/:id" element={<User/>}/>
      <Route path="/admin/projects/:id" element={<Project/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      
    </Routes>
    </div>
    </>
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
