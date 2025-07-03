const ErrorMessage = ({ title }: { title: string }) => {
  return title ? (
    <p className="text-red-700 text-sm font-medium capitalize">{title}</p>
  ) : null;
};

export default ErrorMessage;
