import style from "./Section.module.css";
function Section(props) {
   return (
      <section className={props.title} style={{ backgroundColor: props.color, padding: props.pad }}>
         {props.title ? <h2 className={style.title}>{props.title}</h2> : null}
         {props.children}
      </section>
   );
}
export default Section;
