import { Fragment, useEffect, useState } from "react";
import style from "./TowerPost.module.css";
import Button from "../Button";
import Modal from "../../Layout/Modal";

function TowerPost(props) {
   const [img, setImg] = useState({ datas: {}, isLoaded: false });
   const [modalOpen, setModalOpen] = useState(false);
   const { title, excerpt, media, content } = props;

   useEffect(() => {
      fetch(`https://nowa.turkusowawieza.pl/wp-json/wp/v2/media/${media}`)
         .then((response) => response.json())
         .then((data) => {
            setImg({ datas: data, isLoaded: true });
         });
   }, []);
   const openModalHandler = (e) => {
      e.preventDefault();
      setModalOpen(true);
   };

   const closeModalHandler = (e) => {
      e.preventDefault();
      setModalOpen(false);
   };

   return (
      <div className={style.wraper}>
         {modalOpen ? (
            <Modal title={title} content={content} img={img} closeModal={closeModalHandler} top={props.top} />
         ) : null}
         {!img.isLoaded ? (
            <p>Loading</p>
         ) : (
            <>
               <div className={style.leftColumn}>
                  <div>
                     <h3 className={style.title}>{title.rendered}</h3>
                     <div className={style.text} dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
                  </div>
                  <Button title={"Dowiedź się wiecej"} click={openModalHandler} />
               </div>
               <div className={style.rightColumn}>
                  <div className={style.photo}>
                     <img src={img.datas.media_details.sizes.full.source_url} alt="" />
                  </div>
               </div>
            </>
         )}
      </div>
   );
}

export default TowerPost;
