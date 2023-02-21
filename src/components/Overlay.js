import Button from "./Button";
import style from "./Overlay.module.css";
import close from "./../assets/images/Close.svg";

function Overlay(props) {
   return (
      <div className={style.wraper} style={{ top: props.top }}>
         <div className={style.close} onClick={props.closeModal}>
            <img src={close} alt="close" />
         </div>
         <div className={style.left}>
            <h3 className={style.title}>{props.title.rendered}</h3>
            <p className={style.text} dangerouslySetInnerHTML={{ __html: props.content.rendered }}></p>
            <Button title={"wróć do strony"} click={props.closeModal} />
         </div>
         <div className={style.right}>
            <div className={style.photo}>
               <img src={props.img.datas.media_details.sizes.full.source_url} alt="photo" />
            </div>
         </div>
      </div>
   );
}
export default Overlay;
