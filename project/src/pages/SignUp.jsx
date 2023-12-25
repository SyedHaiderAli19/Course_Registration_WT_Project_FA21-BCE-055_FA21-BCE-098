import React from 'react';
import SignUpForm from '../components/SignUpForm';
import '../components/SignUp.css';

const SignUpPage = ({ onRegister }) => {
  const handleRegister = (formData) => {
    // Implement registration logic or call an API here
    console.log('Registering user:', formData);
  };

  return (
    <div className="">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up for an Account</h2>
              <SignUpForm onRegister={handleRegister} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
