import style from "./Button.module.css";

function ButtonSecondary(props) {
   console.log(props);
   return (
      <a href="#" className={style.buttonClear} style={{ margin: props.margin }}>
         <span>{props.title}</span>
      </a>
   );
}
export default ButtonSecondary;
