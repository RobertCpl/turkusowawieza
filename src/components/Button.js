import { Link } from "react-router-dom";
import arrowSvg from "./../assets/images/button-arrow.svg";
import style from "./Button.module.css";

function Button(props) {
   const arrow = props.notArrow ? null : (
      <span className={style.arrow}>
         <img src={arrowSvg} alt="arrow" />
      </span>
   );
   return (
      <Link to={props.to} className={style.button} style={{ fontSize: props.fontSize }} onClick={props.click}>
         <span>{props.title}</span>
         {arrow}
      </Link>
   );
}
export default Button;
