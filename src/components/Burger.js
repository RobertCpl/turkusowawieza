import burger from "./../assets/images/Menu.svg";
import style from "./Burger.module.css";
function Burger(props) {
   return (
      <>
         <div className={style.burger} onClick={props.openMenuHandler}>
            <img src={burger} alt="burger menu" />
         </div>
      </>
   );
}
export default Burger;
