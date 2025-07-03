import { ReactNode } from "react";

export type TNameInput = "title" | "description" | "price" | "image";

export interface IAddProductSchema {
  title: string;
  description: string;
  image: string;
  price: string;
  color: string;
}

export interface ITextInputForm {
  title: string;
  description: string;
  price: number;
  image: string;
  color: string[];
}

export type ButtonVariant =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "primary";
export interface IProduct {
  id?: number;
  title: string;
  description: string;
  price: number;
  color: string[];
  image: string;
  seller?: ISeller;
}
export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export interface IInputForm {
  label: string;
  name: TNameInput;
  type: string;
  placeholder: string;
}

export interface ISeller {
  id: number;
  name: string;
  avatar: string;
}
