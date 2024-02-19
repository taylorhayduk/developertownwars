import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  status?: {
    pending: boolean;
  };
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  status,
  type = "button",
}) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      aria-disabled={status?.pending}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
