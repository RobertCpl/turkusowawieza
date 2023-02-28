import Logo from "./../assets/images/Logo.svg";
import style from "./Navigation.module.css";
import Burger from "../components/Burger";

function Navigation(props) {
   return (
      <nav className={style.nav}>
         <div className={style.logo}>
            <div className={style.logo_img}>
               <img src={Logo} alt="logo" />
            </div>
            <div className={style.text}>Turkusowa Wieża</div>
         </div>
         <Burger openMenuHandler={props.openMenuHandler} />
      </nav>
   );
}
export default Navigation;
