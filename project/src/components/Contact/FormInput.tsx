import React from 'react';

interface FormInputProps {
  type: 'text' | 'email' | 'textarea';
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  label,
  value,
  onChange,
  placeholder,
  rows
}) => {
  const baseClasses = "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white";

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          rows={rows}
          className={baseClasses}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
          className={baseClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormInput;