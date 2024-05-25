import React from 'react';
import'./Admin.css';

function AddminLogin() {
  return (
    <div className='wrapper'>
    <div className='inner_wrapper'>
        <form action="">
            <h1>Admin Login</h1>
            <div className='input-box'>
              <p>Username(Your Email)</p>
                <input type ='text' placeholder = "name@example.com" required>

                </input>
            </div>
            <div className='input-box'>
              <p>Password</p>
                <input type ='password' placeholder = "**********" required>
                    
                </input>
            </div>
            <button type='submit' class='btn'>Login</button>
        </form>

    </div>
    </div>
  )
}

export default AddminLogin;