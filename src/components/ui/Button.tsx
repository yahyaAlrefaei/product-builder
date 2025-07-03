import { ButtonVariant, IButtonProps } from "../../interfaces";

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: IButtonProps) => {
  const variantList: Record<ButtonVariant, string> = {
    primary: "bg-[#5818c3]",
    success: "bg-green-700",
    error: "bg-red-700",
    warning: "bg-yellow-700",
    info: "bg-blue-700",
  };
  return (
    <button
      className={`bg-green- w-full rounded-lg h-10 text-white font-medium cursor-pointer capitalize ${variantList[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
