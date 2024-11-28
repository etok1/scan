import style from "./style.module.css";

export default function Article() {
  return (
    <div className={style.article}>
      <h2>Article Title</h2>
      <p>Article content goes here...</p>
    </div>
  );
}
