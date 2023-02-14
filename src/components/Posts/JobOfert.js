import placeIcon from "./../../assets/images/placeIcon.svg";
import Button from "../Button";
import style from "./JobOfert.module.css";

function JobOfert() {
   return (
      <div className={style.wraper}>
         <h4 className={style.title}>Przykładowa nazwa stanowiska w Turkusowej Wieży</h4>
         <div className={style.box}>
            <div className={style.place}>
               <div className={style.icon}>
                  <img src={placeIcon} alt="" />
               </div>
               <div className={style.town}>
                  Warszawa <span>Żoliborz</span>
               </div>
            </div>
            <Button title={"Zobacz ofertę"} />
         </div>
      </div>
   );
}
export default JobOfert;
