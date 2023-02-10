import style from "./Wraper.module.css";

function Wraper(props) {
   return <div className={style.wraper}>{props.children}</div>;
}
export default Wraper;
