import style from "./style.module.css";

interface SlideProps {
  children: JSX.Element;
}

export default function Slide({ children }: SlideProps) {
  return <div className={style.slide}>{children}</div>;
}
