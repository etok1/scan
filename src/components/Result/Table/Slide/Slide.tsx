import style from "./style.module.css";

// interface SlideProps {
//   label: string;
//   values: string[];
// }{ label, values }: SlideProps

export default function Slide({ item }: any) {
  return (
    <div className={style.slide}>
      <p>{item.first}</p>
      <p>{item.second}</p>
      <p>{item.third}</p>
    </div>
  );
}
