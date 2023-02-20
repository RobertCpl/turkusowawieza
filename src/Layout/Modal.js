import Backdrop from "../components/Backdrop";
import Overlay from "../components/Overlay";
import ReactDOM from "react-dom";

function Modal(props) {
   return (
      <>
         {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal} />, document.getElementById("backdrop-root"))}
         {ReactDOM.createPortal(
            <Overlay title={props.title} content={props.content} img={props.img} closeModal={props.closeModal} />,
            document.getElementById("overlay-root"),
         )}
      </>
   );
}

export default Modal;
