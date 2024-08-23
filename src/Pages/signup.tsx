import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () =>{
const [name, setName] = useState<string | null>();
const [email, setEmail] = useState<string | null>();
const [password, setPassword] = useState<string | null>();
const [confirmPassword,setConfirmPassword] = useState<string | null>();
const navigate = useNavigate();


const handleSubmit = (e:any)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then (result => {console.log(result)
        navigate('/');
    })
    .catch(err => console.log(err))
}
    return(
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" 
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" 
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
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" 
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
            <Link to='/'>
                <button>Login</button>
            </Link>
        </div>
    )
}

export default Signup;