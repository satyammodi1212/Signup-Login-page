import React, { useState } from 'react';
import { signin } from '../api';
import Input from '../components/Input';
import '../styles/styles.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signin(formData);
      localStorage.setItem('profile', JSON.stringify(data));
      alert('Sign in successful!');
      navigate('/home'); 
    } catch (error) {
      alert('Error during sign in.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input name="email" label="Email" handleChange={handleChange} type="email" />
        <Input name="password" label="Password" handleChange={handleChange} type="password" />
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p>Create a new account? <Link to="/">Click here</Link></p>
    </div>
  );
};

export default Login;
