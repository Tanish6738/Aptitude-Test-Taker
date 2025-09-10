import React from 'react';

type CommonProps = {
  label?: string;
  className?: string;
};

type InputVariant = CommonProps & {
  as?: 'input';
} & React.InputHTMLAttributes<HTMLInputElement>;

type TextareaVariant = CommonProps & {
  as: 'textarea';
  rows?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type FormInputProps = InputVariant | TextareaVariant;

export default function FormInput(props: FormInputProps) {
  const { label } = props;
  const common = 'bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none';

  return (
    <div className="flex flex-col gap-1 mb-3">
      {label && <label className="text-gray-200 text-sm mb-1">{label}</label>}
      {props.as === 'textarea' ? (
        <textarea
          {...(props as TextareaVariant)}
          className={`${common} ${(props as TextareaVariant).className ?? ''}`}
          rows={(props as TextareaVariant).rows ?? 4}
        />
      ) : (
        <input
          {...(props as InputVariant)}
          className={`${common} ${(props as InputVariant).className ?? ''}`}
        />
      )}
    </div>
  );
}
