import { useState } from "react";
import './Login.css';
import Navigation from "./Navigation";
export default function Login() {
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form reload
        console.log(name);
        console.log(password);
    }
    return (
        <>
            <div className="login-container">
            <h3> User Login Form:</h3>
            <form onSubmit={handleSubmit}>
                <p>User Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </p>
                <p>Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </p>
                <button type="submit">Submit</button>
            </form>
            <Navigation/>
            </div>

        </>
    );
}