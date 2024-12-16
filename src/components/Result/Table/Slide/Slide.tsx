import style from "./style.module.css";
import "./style.module.css";
// interface SlideProps {
//   label: string;
//   values: string[];
// }{ label, values }: SlideProps

interface intervalPoint {
  date: string;
  value: number; 
}



export default function Slide({ date, value }: intervalPoint) {

const formattingDate = (date: string) => {
const time = new Date(date)

const year = time.getFullYear();
const month = time.getMonth();
const day = time.getDate();

return `${day < 10 ? '0'+day : day}.${month+1}.${year}`;
}

  return (
    <div className={style.slide}>
      <p>{formattingDate(date)}</p>
      <p>{value}</p>
      <p>0</p>
    </div>
  );
}
