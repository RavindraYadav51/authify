import logo from './logo.svg';
import './App.css';
import Navbar from './Componentsfolder/Navbar';
import { Route ,Routes} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './pages/User';
import AllUsers from './pages/AllUsers';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
function App() {
  return (
    <div className="w-screen min-h-screen bg-[#f5f5f5]">
    <Navbar/>
    <Routes> 
        <Route path='/' element = {<SignIn/>}/>
       <Route path='/signin' element = {<SignIn/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='/add-user' element = {<AddUser/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='/allusers' element = {<AllUsers/>}/>
        <Route path='/users/user/:userId' element = {<User/>}/>
        <Route path='/edituser' element = {<EditUser/>}/>
    </Routes>
  </div>
  );
}

export default App;
