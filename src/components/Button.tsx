import React from "react";

type ButtonProps = {
  children: string;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, disabled, className }) => {
 
  return (
    <button
      // disabled={disabled ? true : false}
      className={`
      
      ${
        disabled
          ? "bg-[#061a3a] text-white cursor-not-allowed"
          : "cursor-pointer hover:bg-[#061a3a] transition-all duration-500 ease-in bg-[#ff7c5b] text-white "
      } 
      px-10 py-2 rounded font-semibold text-lg  border-none  shadow-2xl
    
    ${className}
    
    `}
    >
      {children}
    </button>
  );
};
export default Button;
