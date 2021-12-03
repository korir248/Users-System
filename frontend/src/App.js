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


const App = ()=> {
  // const {user} = useSelector(state => state.user)
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <div className="admin-page">

    <SideBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      {/* <Route path="/users" element={<Users/>} /> */}
      <Route path="/admin" element={ <Admin/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/admin/users" element={<Users/>}/>
      <Route path="/admin/projects" element={<Projects/>}/>
    </Routes>
    </div>
    {/* {user.isAdmin && <SideBar/>} */}
    

    </div>
    </BrowserRouter>
  );
}

export default App;
