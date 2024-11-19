import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
      <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        <form>
          <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fab fa-github"></i></a>
            <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
          {!isSignUp && <span>or use your email for registration</span>}
          {isSignUp && <span>or use your email password</span>}
          {isSignUp && <input type="text" placeholder="Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {isSignUp && <button>Sign Up</button>}
          {!isSignUp && <button>Sign In</button>}
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${isSignUp ? 'active' : ''}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className={isSignUp ? 'hidden' : ''} id="login" onClick={toggleSignUp}>Sign In</button>
          </div>
          <div className={`toggle-panel toggle-right ${isSignUp ? '' : 'active'}`}>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className={!isSignUp ? 'hidden' : ''} id="register" onClick={toggleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
