import { Link, Outlet } from "react-router-dom";
import './NavBar.css';
export default function NavBar() {

    return (
        <>
            
            <nav >
            <div className="navbar">
                <h1>DOCTOR APPOINTMENT APPLICATION</h1>
             <div className="rightSide"> 
                    <Link to='/' > Home </Link>
                
             
                    <Link to='/doctor'> Doctors</Link>
               
             
                    <Link to='/appointment'> Appointments</Link>
                
                
                    <Link to='/login'> Login</Link>
                
                
                    <Link to='/signup'> Signup</Link>
              
            </div>
            </div>
            </nav>
            
            <Outlet></Outlet>
        </>
    );
}