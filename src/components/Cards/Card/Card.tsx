import style from "./style.module.css";

export default function Card({card}:any) {

  const transformXMLToHTML = (xmlString: string) => {

    let htmlString = xmlString
      .replace(/<\/?scandoc>/g, '') 
      .replace(/<\/?sentence>/g, '<p>') 
      .replace(/<\/?entity[^>]*>/g, '') 
      .replace(/&quot;/g, '"') 
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');

    return htmlString;
  };

  const htmlContent = transformXMLToHTML(card.ok.content.markup);

  return (
    <div className={style.card}>
      <div className={style.info}>
        <p className={style.data}>{card.ok.issueDate}</p>
        <p className={style.author}>{card.ok.source.name}</p>
      </div>
      <h2>{card.ok.title.text}</h2>
      <div className={style.tags}>
      {card.ok.attributes.isTechNews && <span className={style.tag}>Технические новости</span>}
      {card.ok.attributes.isAnnouncement && <span className={style.tag}>Анонсы и календари</span>}
      {card.ok.attributes.isDigest && <span className={style.tag}>Сводки новостей</span>}
      </div>
      <img src="/images/result2.png" alt="result2" />
      <p className={style.text}
       dangerouslySetInnerHTML={{ __html:  htmlContent}} 
      />
      <div className={style.footer}>
        <button className={style.btn}>Читать в источнике</button>
        <span className={style.words}> {card.ok.attributes.wordCount} слов</span>
      </div>
    </div>
  );
}
