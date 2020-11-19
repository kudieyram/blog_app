import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'

function SignUpComponent() {
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
            <button type="submit" className="btn btn-primary btn-block">Log in</button>
        </div>
              
    </form>
    <p className="text-center"><a href="#">Create an Account</a></p>
</div>
    </div>
  );
}

export default SignUpComponent;