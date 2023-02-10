import arrowLeft from "./../../assets/images/arrowLeft.svg";
import arrowRight from "./../../assets/images/arrowRight.svg";
import style from "./RecruitmentList.module.css";
function RecruitmentList() {
   return (
      <>
         <div className={style.wraper}>
            <div className={style.arrowLeft}>
               <img src={arrowLeft} alt="arrow left" />
            </div>
            <div className="textBox">Text Box</div>
            <div className={style.arrowRight}>
               <img src={arrowRight} alt="arrow right" />
            </div>
         </div>
         <div className="steps">Kroki</div>
      </>
   );
}
export default RecruitmentList;
