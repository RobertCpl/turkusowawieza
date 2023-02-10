import style from "./ButtonInspiration.module.css";

function ButtonInspiration(props) {
   return (
      <div
         className={style.button}
         style={{ backgroundColor: props.color, padding: props.pad, margin: props.margin, width: props.maxWidth }}
      >
         <span>{props.title}</span>
      </div>
   );
}
export default ButtonInspiration;
