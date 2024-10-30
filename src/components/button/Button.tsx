import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "random" | "delete";
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
  return (
    <button
      className={`${classes.btn} ${
        variant === "random" ? classes.random : classes.delete
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
