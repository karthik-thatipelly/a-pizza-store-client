import React, {useState} from 'react';
import Axios from 'axios';

function Authentication() {
     //used for registration
   const [usernameReg, setUsernameReg] = useState('');
   const [emailReg, setEmailReg] = useState('')
   const [passwordReg, setPasswordReg] = useState('');
     

    //used for login
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   //used for status check
   const [loginStatus, setLoginStatus] =useState('');


   const register = () => {
      Axios.post('http://localhost:3001/register', {
         username: usernameReg,
         email: emailReg,
         password: passwordReg,
      }).then ((response) => {
         console.log(response);
      })
   }

   const login =() => {
      Axios.post('http://localhost:3001/login', {
         username: username,
         password: password,
      }).then ((response) => {
         if(response.data.length > 0){
            setLoginStatus("Successful Login!!")
         } else {
            setLoginStatus("Failed Login!!!");
         }
      })
   }

   return (
      <div>
          
         <div className='m-5 registration'>
            <h2>Registration</h2><br />
            <label>Username</label><br />
            <input type="text" onChange={(e) => {
               setUsernameReg(e.target.value)
               }}/><br />
               <label>Email</label><br />
            <input type="text" onChange={(e) => {
               setEmailReg(e.target.value)
               }}/><br />
            <label>Password</label><br />
            <input type="text" 
            onChange={(e) => {
               setPasswordReg(e.target.value)
               }}/><br />
            <button className='btn btn-danger m-2' onClick={register}>Register</button>
         </div>



         <h2 className="m-5">{loginStatus}</h2>



         <div className='m-5 Login'>
            <h2>Login</h2><br />
            <label>Username</label><br />
            <input type="text" onChange={(e) => {
               setUsername(e.target.value)
               }}/><br />
            <label>Password</label><br />
            <input type="text" onChange={(e) => {
               setPassword(e.target.value)
               }}/><br />
            <button className='btn btn-success m-2' onClick={login}>Login</button>
         </div>
         
      </div>
   );

}

export default Authentication;