import './App.css';
import Login from './user/Login';
import { Routes,Route } from 'react-router-dom';
import Main from './user/Main';
import Home from './user/Home';
import View from './admin/View';
import Mains from './admin/Mains';
import Employee from './admin/Employee';
import { RequireAuth } from './Auth';
import { Logout } from './Logout';

function App() {
  return (
    <div>
     
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<RequireAuth><Main child={<Home/>}/></RequireAuth>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='/view' element={<RequireAuth><Mains child={<View/>}/></RequireAuth>}></Route>
      <Route path='/add' element={<RequireAuth><Mains child={<Employee/>}/></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
