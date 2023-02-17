import ArrowScroll from "../components/ArrowScroll";
import style from "./Section.module.css";
function Section(props) {
   return (
      <section className={props.className} style={{ backgroundColor: props.color, padding: props.pad }}>
         {props.line ? <div className={style.line}></div> : null}
         {props.title ? (
            <h2 className={style.title}>
               {props.title}
               {props.title2 ? <span>{props.title2}</span> : null}
               <div className={style.decor}></div>
            </h2>
         ) : null}
         {props.children}
         <ArrowScroll />
      </section>
   );
}
export default Section;
