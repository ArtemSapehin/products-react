import { APITester } from "./APITester";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import {use, useState} from "react";
export interface User{
    name : string,
    password : string
}

export function App() {

    const [user, setUser] = useState<User>({
        name: "",
        password: ""
    })

    function updateUsername(username : string){
        setUser({...user, name: username});
    }

    function updatePassword(password: string){
        setUser({...user, password: password});
    }

    async function registerUser(){
        await fetch('/api/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

  return (
    <div>
        <h1>Register Form</h1>
        <div style={{display: "flex", flexFlow: "column", gap: 10}}>
            <input placeholder="Username" value={user.name || ""} onChange={e => updateUsername(e.target.value)}/>
            <input placeholder="Password" value={user.password || ""} onChange={e => updatePassword(e.target.value)} type="password" />
            <button onClick={registerUser}>Register</button>
        </div>
    </div>
  );
}

export default App;
