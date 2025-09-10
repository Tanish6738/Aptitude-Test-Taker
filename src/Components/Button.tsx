"use client";
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors"
      onClick={(event) => {
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
