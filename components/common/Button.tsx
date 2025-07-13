import React from 'react';
import { ButtonProps } from '../../interfaces';
import { BUTTON_VARIANTS, BUTTON_SIZES } from '../../constants';

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = BUTTON_VARIANTS.PRIMARY,
  size = BUTTON_SIZES.MEDIUM,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    [BUTTON_VARIANTS.PRIMARY]: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    [BUTTON_VARIANTS.SECONDARY]: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    [BUTTON_VARIANTS.OUTLINE]: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
  };
  
  const sizeStyles = {
    [BUTTON_SIZES.SMALL]: 'px-3 py-1.5 text-sm',
    [BUTTON_SIZES.MEDIUM]: 'px-4 py-2 text-base',
    [BUTTON_SIZES.LARGE]: 'px-6 py-3 text-lg',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;