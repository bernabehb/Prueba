import React from 'react';

const Button = ({
  type = 'button',
  onClick,
  children,
  className = '',
  disabled = false,
  variant = 'primary'
}) => {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    filtro: 'btn-filtro'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;