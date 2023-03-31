import React from "react";

interface Props {
  children: string;
  onClick?: (event: any) => void;
  disabled?: true | false;
  classes?: string[];
  type: "button" | "submit" | "reset";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  size?: "sm" | "lg";
}

const Button = ({
  children,
  onClick,
  disabled,
  type,
  classes,
  color = "primary",
}: Props) => {
  return (
    <button
      className={`btn btn-${color}` + (classes ? ` ${classes.join(" ")}` : "")}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
