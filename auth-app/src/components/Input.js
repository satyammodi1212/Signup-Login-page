import React from 'react';

const Input = ({ name, label, handleChange, type }) => (
  <div className="input-container">
    <label>{label}</label>
    <input name={name} onChange={handleChange} type={type} required />
  </div>
);

export default Input;
