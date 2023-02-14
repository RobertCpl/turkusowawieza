import icon from "./../../assets/images/headIcon.svg";
import style from "./Circle.module.css";

function Circle() {
   return (
      <div className={style.wraper}>
         <div className={style.left}>
            <div className={style.circleL1}>
               <div className={style.circleL2}>
                  <div className={style.circleL3}></div>
               </div>
            </div>
         </div>
         <div className={style.right}>
            <div className={style.circleR1}>
               <div className={style.circleR2}>
                  <div className={style.circleR3}></div>
               </div>
            </div>
         </div>
         <div className={style.box}>
            <p className={style.paragrafOne}>
               Fundacja Społeczeństwo jest ogólnopolską Organizacją Pożytku Publicznego, powołaną dla powodowania
               pozytywnej zmiany społecznej tam, gdzie świeża idea, nowoczesny pogląd oraz technologia dają taką
               możliwość. Jednym z obszarów, który wspiera fundacja jest edukacja. W jej ramach działa żłobek i
               przedszkole Zielona Wieża, Turkusowa Wieża oraz Liceum w Chmurze. Pod patronatem fundacji działa również
               platforma Szkoła w Chmurze.
            </p>
            <div className={style.icon}>
               <img src={icon} alt="logo" />
            </div>
            <p className={style.paragrafTwo}>
               <span>Fundusze fundacji pochodzą m.in. z 1,5% podatków przekazywanych przy rozliczaniu PIT-ów.</span>
               <span>
                  Prosimy, wesprzyj szkołę - przekaż 1,5% podatku na Fundację Społeczeństwo. Nr KRS: 0000346649 Pomóż
                  nam tworzyć tę szkołę dla wszystkich.{" "}
               </span>
            </p>
         </div>
      </div>
   );
}
export default Circle;
