import React from 'react';

const Dropdown = ({ options, value, onChange, className }) => {
  return (
    <select value={value} onChange={onChange} className={`border rounded py-2 px-4 ${className}`}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
