import iconOne from "./../../assets/images/personIcon1.png";
import iconTwo from "./../../assets/images/personIcon2.png";
import iconThree from "./../../assets/images/personIcon3.png";
import iconFour from "./../../assets/images/personIcon4.png";
import Button from "../../components/Button";
import style from "./JoinUs.module.css";

function JoinUs() {
   return (
      <div className={style.wraper}>
         <div className={style.icons}>
            <div className={style.icon}>
               <img src={iconOne} alt="" />
            </div>
            <div className={style.icon}>
               <img src={iconTwo} alt="" />
            </div>
            <div className={style.icon}>
               <img src={iconThree} alt="" />
            </div>
            <div className={style.icon}>
               <img src={iconFour} alt="" />
            </div>
         </div>
         <p className={style.paragrafOne}>
            W Turkusowej Wieży nieustannie podążamy za potrzebami i zainteresowaniami dzieci, dlatego w ciągu roku
            często poszukujemy nowych osób do współpracy.
         </p>
         <p className={style.paragrafTwo}>
            Jeżeli masz jakąś pasję, którą uwielbiasz dzielić się z dziećmi, a wizja i sposób, w jaki działamy jest Ci
            bliski, wyślij do nas swoje zgłoszenie na{" "}
            <a href="mailto: rekrutacja@turkusowawieza.pl">rekrutacja@turkusowawieza.pl</a> - podeślij nam swoje CV oraz
            napisz w kilku zdaniach, w jakich obszarach chciałbyś z nami współpracować
         </p>
         <Button title={"Aktualne oferty pracy"} />
      </div>
   );
}
export default JoinUs;
