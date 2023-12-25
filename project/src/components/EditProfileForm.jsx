// EditProfileForm.jsx
import React, { useState, useEffect } from 'react';

const EditProfileForm = ({ user, onUpdateProfile }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    // Add other form fields and initialize with user data
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
    onUpdateProfile(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      {/* Add other form fields */}
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default EditProfileForm;
