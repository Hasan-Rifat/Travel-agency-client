import React from "react";

type ButtonProps = {
  children: string | React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
      
      ${
        disabled
          ? "bg-[#061a3a] text-white cursor-not-allowed"
          : "cursor-pointer hover:bg-[#061a3a] transition-all duration-500 ease-in bg-[#ff7c5b] text-white "
      } 
      px-10 py-2 rounded font-semibold text-lg  border-none  blog__shadow 
    
    ${className}
    
    `}
    >
      {children}
    </button>
  );
};
export default Button;
