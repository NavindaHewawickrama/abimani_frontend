import React from  'react';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () =>{

    const [email, setEmail] = useState<string | null>();
    const [password, setPassword] = useState<string | null>();
    const navigate = useNavigate();

    const handleSubmit =(e:any) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result =>{console.log(result)
            console.log(result)
            if(result.data.status === "Success"){
                navigate('/home')
            }
           
        })
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Email:</label>
                    <input type="text" id="email" name="email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;