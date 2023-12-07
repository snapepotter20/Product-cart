import React , {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

      const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }
     })

    const collectData = async()=>{
       let data = await fetch("https://localhost:5000/register",{
            method:"Post",
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const result = await data.json();
        console.log(result);
        localStorage.setItem('user',JSON.stringify(result.result));
        localStorage.setItem('token',JSON.stringify(result.auth));
        navigate('/');
    }

  return (
    <div className='signup'>
       <input type='text' placeholder='Name' className='signup-input' value={name} onChange={(e)=>setName(e.target.value)}/>
       <input type='text' placeholder='Email' className='signup-input' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <input type='password' placeholder='Password' className='signup-input' value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <button type='text' className='signup-btn' onClick={collectData}>SignUp</button>
    </div>
  )
}

export default SignUp;
