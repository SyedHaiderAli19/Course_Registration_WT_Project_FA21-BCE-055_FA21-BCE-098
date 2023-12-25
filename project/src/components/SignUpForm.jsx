import React, { useState } from 'react';

const SignUpForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    // Define your form fields
    name: '',
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
    // Call the onRegister prop with the form data
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      {/* Your form fields go here */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
      </div>

      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
