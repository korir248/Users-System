import './App.css';

import { BrowserRouter, Route, Routes} from "react-router-dom";
import { useSelector } from 'react-redux'
import Signup from './components/main/Signup';
// import Home from './components/Home';
import Login from "./components/main/Login"
import AdminRoutes from './components/AdminRoutes';
import Header from './components/main/Header';
import { ToastContainer} from 'react-toastify';
import UserRoutes from './components/UserRoutes';
import Footer from './components/mini components/Footer';


const App = ()=> {
  const {user} = useSelector(state => state.user)
  return (
    <BrowserRouter>
    <div className="App">
    <ToastContainer/>

    <Header/>
    <Routes>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>      
    </Routes>
    
    {user?.isAdmin ? 
      <AdminRoutes/> : <UserRoutes />
    }
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
