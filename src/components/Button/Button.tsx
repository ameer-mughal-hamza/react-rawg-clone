import React from "react";

interface Props {
  children: string;
  onClick?: (event: any) => void;
  disabled?: true | false;
  classes?: string[];
  type: "button" | "submit" | "reset";
  outline?: true | false;
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
  outline = false,
  size,
}: Props) => {
  return (
    <button
      className={
        `btn btn${outline ? "-outline" : ""}-${color} btn-${size}` +
        (classes ? ` ${classes.join(" ")}` : "")
      }
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
