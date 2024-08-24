import React, { useState } from 'react';
import { signup } from '../api';
import Input from '../components/Input';
import '../styles/styles.css';
import '../styles/Signups.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', password: '' });
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(''); // State to manage error messages

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Clear previous errors

    // Basic client-side validation
    if (!formData.name || !formData.mobile || !formData.email || !formData.password) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }
    try {
      await signup(formData);
      alert('Signup successful!');
    } catch (error) {
      // alert('Error during signup.');
      setError(error.response?.data?.message || 'Error during signup.');
    }finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <Input name="name" label="Name" handleChange={handleChange} type="text" />
        <Input name="mobile" label="Mobile Number" handleChange={handleChange} type="text" />
        <Input name="email" label="Email" handleChange={handleChange} type="email" />
        <Input name="password" label="Password" handleChange={handleChange} type="password" />
        <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Display error messages */}
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  
  );
};

export default Signup;
