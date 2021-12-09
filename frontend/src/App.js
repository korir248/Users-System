import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login"
import Error from './components/Error';
import Admin from './components/Admin';
import Header from './components/Header';
import Users from './components/Users';
import SideBar from './components/SideBar';
import Projects from './components/Projects';
import { useSelector } from 'react-redux'
import Tasks from './components/Tasks';
import User from './components/mini components/User';


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
    
    {user.isAdmin ? 
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
