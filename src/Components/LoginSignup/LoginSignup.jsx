// import React, { useState } from 'react';
// import './LoginSignup.css';

// const LoginSignup = () => {
//     const [action, setAction] = useState("Signup");

//     return (
//         <div className='container'>
//             <div className='header'>
//                 <div className='text'>{action}</div>
//                 <div className='underline'></div>
//             </div>
//             <div className="inputs">
//                 {action=="Login" ? <div></div>: <div className="input">
//                     <label>Username:</label>
//                     <input type='text' placeholder='Username' />
//                 </div>
//                 } 
//                  <div className="input">
//                     {action=="Login"?<div></div>:<div className='input'>}
//                     <label>DOB:</label>
//                     <input type='text' placeholder='Date of Birth' />
//                 </div>
//                 </div>
               
//                 <div className="input">
//                     <label>Email:</label>
//                     <input type='text' placeholder='Email' />
//                 </div>
                
//                 <div className="input">
//                     <label>Password:</label>
//                     <input type='password' placeholder='Password' />
//                 </div>
//             </div>
//             <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
//             <div className="submit-container">
//                 <div className={action === "Login" ? "submit gray" : "submit"}onClick={()=>{setAction("SignUp")}}>Signup</div>
//                 <div className={action === "Signup" ? "submit gray" : "submit"}onClick={()=>{setAction("Login")}}>Login</div>
//             </div>
//         </div>
//     );
// }

// export default LoginSignup;

import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Signup");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        {action === "Signup" && (
          <>
            <div className="input">
              <label>Username:</label>
              <input type='text' placeholder='Username' />
            </div>
            <div className='input'>
              <label>DOB:</label>
              <input type='text' placeholder='Date of Birth' />
            </div>
          </>
        )}
        <div className="input">
          <label>Email:</label>
          <input type='text' placeholder='Email' />
        </div>
        <div className="input">
          <label>Password:</label>
          <input type='password' placeholder='Password' />
        </div>
      </div>
      <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Signup") }}>Signup</div>
        <div className={action === "Signup" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
    </div>
  );
}

export default LoginSignup;
