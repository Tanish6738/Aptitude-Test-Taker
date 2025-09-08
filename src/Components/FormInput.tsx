import React from 'react';

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function FormInput({ label, ...props }: FormInputProps) {
  return (
    <div className="flex flex-col gap-1 mb-3">
      {label && <label className="text-gray-200 text-sm mb-1">{label}</label>}
      <input
        className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
        {...props}
      />
    </div>
  );
}
