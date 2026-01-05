import React from 'react';

const TextInput = ({ 
  id, 
  type = 'text', 
  label, 
  placeholder, 
  value, 
  onChange, 
  required = false,
  className = '' 
}) => {
  return (
    <div>
      <label htmlFor={id} className="label-form">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`input-field ${className}`}
      />
    </div>
  );
};

export default TextInput;