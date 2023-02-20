import style from "./Backdrop.module.css";

function Backdrop(props) {
   return <div className={style.backdrop} onClick={props.closeModal}></div>;
}
export default Backdrop;
