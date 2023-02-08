import Logo from "./../../assets/images/Logo.svg";
import style from "./Navigation.module.css";
import Burger from "./Burger";

function Navigation() {
   return (
      <nav className={style.nav}>
         <div className={style.logo}>
            <div className={style.logo_img}>
               <img src={Logo} alt="logo" />
            </div>
            <div>Turkusowa Wieża</div>
         </div>
         <Burger />
      </nav>
   );
}
export default Navigation;
