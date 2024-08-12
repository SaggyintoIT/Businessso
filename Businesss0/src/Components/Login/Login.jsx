import React, { useState, useEffect } from 'react';
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setMessage(`You are already logged in as ${storedEmail}`);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the email in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password); // Although storing password in local storage is not recommended
    setMessage('Login successful!');
  };

  return (
    <div className="authentication-area bg-light">
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-12">
            <div className="wrapper">
              <div className="row align-items-center">
                <div className="col-lg-6 bg-primary-light">
                  <div className="content bg-[#ff6b6b19]">
                    <div className="logo mb-3">
                      <a href="https://businesso.xyz">
                        <img
                          src="https://businesso.xyz/assets/front/img/6506953ba3468.png"
                          alt="Logo"
                        />
                      </a>
                    </div>
                    <div className="svg-image">
                      <img
                        src="https://businesso.xyz/assets/frontend/images/login.svg"
                        alt="Login Illustration"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="main-form">
                    <a
                      href="https://businesso.xyz"
                      className="icon-link"
                      title="Go back to home"
                    >
                      <i className="fal fa-home" />
                    </a>
                    <div className="title">
                      <h3 className="mb-4 login">Login</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                        <label>Email Address*</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>Password *</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      {message && <div className="alert alert-danger">{message}</div>}
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary w-100"
                        >
                          LOG IN
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
