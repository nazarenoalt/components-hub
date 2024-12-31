const Button = ({ 
  children, 
  type = "primary", 
  rounded = false, 
  alternative = false, 
  ...rest 
}) => {

  const className = rest?.className
  const styles = getButtonStyles({ type, rounded, alternative, className });
  delete rest.className;
  
  return (
    <button  className={styles} {...rest}>
      {children}
    </button>
  );
};

const getButtonStyles = ({ type, rounded, alternative, className }) => {
  const baseStyles = [
    "px-4 py-1 transition-all",
    rounded ? "rounded-full" : "rounded",
    className
  ];

  const typeStyles = {
    primary: alternative
      ? "text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white"
      : "bg-blue-400 text-white hover:bg-blue-500 ",
    warn: alternative
      ? "text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white"
      : "bg-yellow-500 text-white hover:bg-yellow-600",
    alert: alternative
      ? "text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"
      : "bg-red-500 text-white hover:bg-red-600",
    green: alternative
      ? "text-green-500 border border-green-500 hover:bg-green-500 hover:text-white"
      : "bg-green-500 text-white hover:bg-green-600",
  };

  // Usar tipo especificado o fallback
  const selectedTypeStyle = typeStyles[type] || typeStyles["primary"];

  return [...baseStyles, selectedTypeStyle].join(" ");
};

export default Button;