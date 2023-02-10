import ArrowScroll from "../components/ArrowScroll";
import style from "./Section.module.css";
function Section(props) {
   return (
      <section className={props.className} style={{ backgroundColor: props.color, padding: props.pad }}>
         {props.title ? <h2 className={style.title}>{props.title}</h2> : null}
         {props.children}
         <ArrowScroll />
      </section>
   );
}
export default Section;
