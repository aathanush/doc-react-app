import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import NavBar from './NavBar';
import Home from './Home';
import Doctor from './Doctor';
import Appoinment from './Appointment';
import Login from './Login';
import Signup from './Signup';
import NoPage from './NoPage';

function App() {
  return (
    <>
      <AuthProvider>
    <BrowserRouter>
      <Routes>
 
        <Route path='/' element={<NavBar></NavBar>}>
          <Route index element ={<Home></Home>}></Route>
          <Route path='/doctor' element ={<Doctor></Doctor>}></Route>
          <Route path='/appointment' element ={<Appoinment></Appoinment>}></Route>
          <Route path='/login' element ={<Login></Login>}></Route>
          <Route path='/signup' element ={<Signup></Signup>}></Route>

          <Route path = '*' element={<NoPage></NoPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    
    </>
  );
}

export default App;
