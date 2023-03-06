import Logo from "./../assets/images/Logo.svg";
import style from "./Navigation.module.css";
import Burger from "../components/Burger";
import { Link } from "react-router-dom";

function Navigation(props) {
   return (
      <nav className={style.nav}>
         <Link to={"/"} className={style.link}>
            <div className={style.logo}>
               <div className={style.logo_img}>
                  <img src={Logo} alt="logo" />
               </div>
               <div className={style.text}>Turkusowa Wieża</div>
            </div>
         </Link>
         <Burger openMenuHandler={props.openMenuHandler} />
      </nav>
   );
}
export default Navigation;
