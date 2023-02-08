import arrow from "./../assets/images/button-arrow.svg";
import style from "./Button.module.css";

function Button(props) {
   return (
      <a href="#" className={style.button}>
         <span>{props.title}</span>
         <span>
            <img src={arrow} alt="arrow" />
         </span>
      </a>
   );
}
export default Button;
