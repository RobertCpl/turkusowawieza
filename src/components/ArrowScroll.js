import arrowDown from "./../assets/images/arrowDown.svg";
import style from "./ArrowScroll.module.css";
function ArrowScroll() {
   return (
      <div className={style.circle}>
         <img src={arrowDown} alt="arrow" />
      </div>
   );
}
export default ArrowScroll;
