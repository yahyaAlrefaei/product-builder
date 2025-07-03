import { InputHTMLAttributes } from "react";

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}
const Input = ({
  label,
  name,
  type,
  placeholder,
  onChange,
  value,
}: IPropsInput) => {
  return (
    <div className="space-y-2 mb-2">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        className="border border-gray-700 rounded-lg p-2 w-full"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
