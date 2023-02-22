import style from "./Steps.module.css";

function Step(props) {
   const { index, curentIndex } = props;
   return (
      <div className={`${style.border} ${index === curentIndex ? style.stepActive : style.step}`}>
         <div className={style.step}></div>
      </div>
   );
}
export default Step;
