import { ReactNode } from "react";
import style from "./style.module.css";

interface ButtonProps {
  children: ReactNode;
  clicked?: boolean;
}

export default function Button({ children, clicked }: ButtonProps) {
  return (
    <button className={`${style.button} ${clicked ? style.clicked : ""}`}>
      {children}
    </button>
  );
}
