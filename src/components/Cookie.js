import style from "./Cookie.module.css";
import { Link } from "react-router-dom";
function Cookie(props) {
   return (
      <div className={style.wraper}>
         <div className={style.info}>
            <div className={style.text}>
               Nasza strona internetowa wykorzystuje pliki cookies, w celach funkcjonalnych i statystycznych. Każdy może
               zaakceptować pliki cookies oraz ma możliwość ich wyłączenia w przeglądarce. Przeglądarki internetowe mogą
               mieć ustawioną domyślnie zgodę na użycie plików cookies. Więcej informacji znajdziesz w{" "}
               <Link className={style.link} to={"/polityka-prywatnosci"}>
                  polityce prywatności.
               </Link>
            </div>
            <button className={style.cookieBtn} onClick={props.cookeHandler}>
               Ok, rozumiem
            </button>
         </div>
      </div>
   );
}
export default Cookie;
