import arrowSvg from "./../assets/images/button-arrow.svg";
import style from "./Button.module.css";

function Button(props) {
   // const actionHandler = (e) => {
   //    console.log(props);
   //    if (props.title === "Zgłoś się") {
   //       console.log("zglos sie");
   //    } else if (props.title === "Dowiedź się wiecej") {
   //       return props.openModal;
   //    } else if (props.title === "wróć do strony") {
   //       console.log(props);
   //       return props.closeModal;
   //    }
   // };

   const arrow = props.notArrow ? null : (
      <span className={style.arrow}>
         <img src={arrowSvg} alt="arrow" />
      </span>
   );
   return (
      <a href="#" className={style.button} style={{ fontSize: props.fontSize }} onClick={props.click}>
         <span>{props.title}</span>
         {arrow}
      </a>
   );
}
export default Button;
