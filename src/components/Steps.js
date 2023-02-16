import style from "./Steps.module.css";

function Steps() {
   return (
      <div className={style.wraper}>
         <div className={`${style.border} ${style.stepActive}`}>
            <div className={style.step}></div>
         </div>
         <div className={style.border}>
            <div className={style.step}></div>
         </div>
         <div className={style.border}>
            <div className={style.step}></div>
         </div>
         <div className={style.border}>
            <div className={style.step}></div>
         </div>
         <div className={style.border}>
            <div className={style.step}></div>
         </div>
      </div>
   );
}
export default Steps;
