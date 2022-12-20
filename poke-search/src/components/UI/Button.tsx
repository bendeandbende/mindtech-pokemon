import React from 'react';

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: any;
}) => {
  return (
    <button className="nes-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
