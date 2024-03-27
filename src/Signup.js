import { useState } from "react";
import './Signup.css';
import Navigation from "./Navigation";
export default function Signup() {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [gender, setGender] = useState("");
    let[email,setEmail]=useState("");
    let [password, setPassword] = useState("");
    let[confirmpassword,setConfirmpassword]=useState("");
   
    

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form reload
        console.log(name);
        console.log(age);
        console.log(gender);
        console.log(email);
        console.log(password);
        console.log(confirmpassword);


    }
    return (
        <>
            <div className="signup-container">
            
            <h3> User SignUp Form:</h3>
            <form onSubmit={handleSubmit}>
                <p>User Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </p>
                <p>Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
                </p>
                <p>Gender:
                    <input type="text" value={gender} onChange={(e) => setName(e.target.value)}></input>
                </p>
                <p>Email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </p>
                <p>Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </p>
                <p>Confirm Password:
                    <input type="password" value={confirmpassword}onChange={(e) => setConfirmpassword(e.target.value)}></input>
                </p>
                <button type="submit">Submit</button>
            </form>
            <Navigation/>
            </div>
        </>
    )
}