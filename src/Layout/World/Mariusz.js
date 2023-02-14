import photo from "./../../assets/images/mariusz.jpg";
import style from "./Mariusz.module.css";

function Mariusz() {
   return (
      <div className={style.wraper}>
         <div className={style.photo}>
            <img src={photo} alt="" />
         </div>
         <div className={style.title}>
            <h3 className={style.name}>Mariusz Truszkowski</h3>
            <span>założyciel Turkusowej Wieży</span>
         </div>
         <p className={style.text}>
            Mariusz to przedsiębiorca społeczny, którego pasją jest znajdowanie pełniejszych sposobów życia, edukacji i
            pracy. Zjeździł spory kawałek świata, odwiedzając rozmaite szkoły oraz społeczności i ich twórców, znajdując
            dobre praktyki i powtarzające się wzorce działania, uzupełniając to wszystko wiedzą naukową oraz własnym
            doświadczeniem. Wszystkie jego inicjatywy społeczne działają w ramach Fundacji Społeczeństwo.
         </p>
      </div>
   );
}
export default Mariusz;
