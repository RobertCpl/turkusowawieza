import style from "./SendedEmail.module.css";
import close from "./../assets/images/Close.svg";
function SendedEmail(props) {
   const errorMessage = props.error ? (
      <p className={style.text}>
         Widomośc nie zostałą wysłana
         <span>Spróbuj jeszcze raz</span>
      </p>
   ) : (
      <p className={style.text}>
         Wiadomosć została wysłana
         <span>Dziekujemy</span>
      </p>
   );

   return (
      <div className={style.wraper}>
         <div className={style.close} onClick={props.close}>
            <img src={close} alt="" />
         </div>
         {errorMessage}
      </div>
   );
}
export default SendedEmail;
