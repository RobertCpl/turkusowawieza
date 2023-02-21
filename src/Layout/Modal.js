import Backdrop from "../components/Backdrop";
import Overlay from "../components/Overlay";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

function Modal(props) {
   return (
      <div className={style.wraper}>
         {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal} />, document.getElementById("backdrop-root"))}

         {ReactDOM.createPortal(
            <Overlay
               title={props.title}
               content={props.content}
               img={props.img}
               closeModal={props.closeModal}
               top={props.top}
            />,
            document.getElementById("overlay-root"),
         )}
      </div>
   );
}

export default Modal;
