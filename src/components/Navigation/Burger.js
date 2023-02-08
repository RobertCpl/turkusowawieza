import burger from "./../../assets/images/Menu.svg";
import close from "./../../assets/images/Close.svg";
import style from "./Burger.module.css";
import { useState } from "react";
function Burger() {
   const [openMenu, setOpenMenu] = useState(false);

   function openMenuHandler() {
      console.log("dziala");
      setOpenMenu((prevState) => !prevState);
   }
   return (
      <>
         <div className={style.burger} onClick={openMenuHandler}>
            {!openMenu ? <img src={burger} alt="burger menu" /> : <img src={close} alt="burger menu" />}
         </div>
      </>
   );
}
export default Burger;
