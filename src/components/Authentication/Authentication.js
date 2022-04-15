import React from 'react';


function Authentication() {
   return (
      <div>
         <div className='m-5 registration'>
            <h2>Registration</h2><br />
            <label>Username</label><br />
            <input type="text" /><br />
            <label>Password</label><br />
            <input type="text" /><br />
            <button className='btn m-2'>Register</button>
         </div>

         <div className='m-5 Login'>
            <h2>Login</h2><br />
            <label>Username</label><br />
            <input type="text" /><br />
            <label>Password</label><br />
            <input type="text" /><br />
            <button className='btn m-2'>Login</button>
         </div>
      </div>
   );

}

export default Authentication;