import style from "./ButtonSecondary.module.css";

function ButtonSecondary(props) {
   return (
      <a href="#" className={style.button}>
         <span>{props.title}</span>
      </a>
   );
}
export default ButtonSecondary;
