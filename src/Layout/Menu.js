import style from "./Menu.module.css";
import close from "./../assets/images/Close.svg";
import { Link } from "react-router-dom";
function Menu(props) {
   return (
      <div className={style.wraper}>
         <div className={style.menu}>
            <div className={style.close} onClick={props.closeMenuHandler}>
               <img src={close} alt="close menu" />
            </div>
         </div>
         <ul className={style.list}>
            <li>
               <Link to={"/"} onClick={props.closeMenuHandler}>
                  Home
               </Link>
            </li>
            <li>
               <Link to={"/polityka-prywatnosci"} onClick={props.closeMenuHandler}>
                  Polityka prywatnosci
               </Link>
            </li>
            <li>
               <Link to={"/formularz-zgloszeniowy"} onClick={props.closeMenuHandler}>
                  Formularz zgłoszeniowy
               </Link>
            </li>
         </ul>
      </div>
   );
}
export default Menu;
