import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    // Define your form fields
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onLogin prop with the form data
    onLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      {/* Your form fields go here */}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
      </div>

      <button type="submit" className="btn btn-primary">Log In</button>
    </form>
  );
};

export default LoginForm;
