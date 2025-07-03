import { ButtonHTMLAttributes } from "react";

export interface ICircleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const Circle = ({ color, ...reset }: ICircleProps) => {
  return (
    <button
      type="button"
      className="bg-blue-700 w-6 h-6 rounded-full cursor-pointer"
      style={{ backgroundColor: color }}
      {...reset}
    ></button>
  );
};

export default Circle;
