import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  show?: boolean;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}
const Alert = ({ children, show, color = "primary" }: Props) => {
  return (
    <div
      className={
        show
          ? `alert alert-${color} alert-dismissible fade show`
          : `alert alert-${color} alert-dismissible fade`
      }
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
