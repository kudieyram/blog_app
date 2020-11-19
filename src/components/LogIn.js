import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link
  } from "react-router-dom";

function LogInComponent() {

    const handlelogin = () =>{
        alert('😍Sign In Successful')
    }
  return (
    <div>
        <div className="login-form">
    <form>
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required"/>
        </div>
        <div className="form-group">
            <button className="btn btn-primary btn-block" onClick={handlelogin}>Log in</button>
        </div>
              
    </form>
    <p className="text-center"><a>New here? <Link to="/signup">Create an Account</Link></a></p>
</div>
    </div>
  );
}

export default LogInComponent;
