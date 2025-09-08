import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors"
      onClick={e => {
        onClick?.();
        console.log('Button clicked');
      }}
      {...props}
    >
      {children}
    </button>
  );
}
