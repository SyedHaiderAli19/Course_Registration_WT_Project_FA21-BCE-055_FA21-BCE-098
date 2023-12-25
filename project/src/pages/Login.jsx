import React from 'react';
import LoginForm from '../components/LoginForm';
import '../components/Login.css';

const LoginPage = ({ onLogin }) => {
  const handleLogin = (formData) => {
    console.log('Logging in user:', formData);
    // Add your login logic or API call here
  };

  return (
    <div className="">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login to Your Account</h2>
              <LoginForm onLogin={handleLogin} />

              <div className="form-check mt-3">
                <input type="checkbox" className="form-check-input" id="staySignedIn" />
                <label className="form-check-label" htmlFor="staySignedIn">
                  Stay signed in
                </label>
              </div>

              <div className="text-center mt-3">
                <a href="#" className="text-muted">Forgot password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
