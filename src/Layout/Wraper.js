import style from "./Wraper.module.css";

function Wraper(props) {
   return (
      <div className={style.wraper} style={{ maxWidth: props.maxWidth, justifyContent: props.justifyContent }}>
         {props.children}
      </div>
   );
}
export default Wraper;
