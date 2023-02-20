import { useEffect, useState } from "react";
import style from "./Team.module.css";
import dziubek from "./../../assets/images/dziubek.svg";
import Modal from "../../Layout/Modal";

function Team(props) {
   const [photo, setPhoto] = useState({ datas: {}, isLoaded: false });
   const [modalOpen, setModalOpen] = useState(false);
   const { featured_media, title, content } = props.person;

   useEffect(() => {
      const getImg = async () => {
         const response = await fetch(`https://nowa.turkusowawieza.pl/wp-json/wp/v2/media/${featured_media}`);
         const data = await response.json();
         setPhoto({ datas: data, isLoaded: true });
      };
      getImg();
   }, []);

   const openModalHandler = (e) => {
      e.preventDefault();
      setModalOpen(true);
   };

   const closeModalHandler = (e) => {
      e.preventDefault();
      setModalOpen(false);
   };

   const person = !photo.isLoaded ? (
      <p>is Loading</p>
   ) : (
      <div className={style.wraper} onClick={openModalHandler}>
         <div className={style.person}>
            <img src={photo.datas.media_details.sizes.thumbnail.source_url} alt="person photo" />
            <div className={style.name}>
               {title.rendered}
               <img className={style.dziubek} src={dziubek} alt="" />
            </div>
         </div>
      </div>
   );

   return (
      <>
         {modalOpen ? <Modal title={title} content={content} img={photo} closeModal={closeModalHandler} /> : null}
         {person}
      </>
   );
}
export default Team;
