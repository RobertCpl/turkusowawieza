import style from "./ButtonSecondary.module.css";

function ButtonSecondary(props) {
   return (
      <a href="#" className={style.button} onClick={props.scroll}>
         <span>{props.title}</span>
      </a>
   );
}
export default ButtonSecondary;
