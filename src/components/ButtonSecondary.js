import style from "./ButtonSecondary.module.css";

function ButtonSecondary(props) {
   console.log(props);
   return (
      <a href="#" className={style.button} style={{ margin: props.margin }}>
         <span>{props.title}</span>
      </a>
   );
}
export default ButtonSecondary;
