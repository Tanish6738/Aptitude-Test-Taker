import React from 'react';

type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>

type FormInputProps = BaseInputProps & {
  label?: string;
  as?: 'input' | 'textarea';
};

export default function FormInput({ label, as = 'input', rows = 4, ...props }: FormInputProps) {
  const common = 'bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none';
  return (
    <div className="flex flex-col gap-1 mb-3">
      {label && <label className="text-gray-200 text-sm mb-1">{label}</label>}
      {as === 'textarea' ? (
        <textarea className={common} rows={rows as number} {...(props as any)} />
      ) : (
        <input className={common} {...(props as any)} />
      )}
    </div>
  );
}
