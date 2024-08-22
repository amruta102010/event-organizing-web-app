import React from 'react';

const Input = ({ type, name, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}  
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      required
    />
  );
};

export default Input;
