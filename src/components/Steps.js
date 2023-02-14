import { forwardRef } from "react";
import style from "./Steps.module.css";

const Steps = forwardRef(({}, steps) => {
   return (
      <div className={style.wraper} ref={steps}>
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
});
export default Steps;
