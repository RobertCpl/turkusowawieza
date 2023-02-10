import { Fragment, useEffect, useState } from "react";
import style from "./AboutPost.module.css";

function Post(props) {
   const [img, setImg] = useState({ datas: {}, isLoaded: false });
   const { title, content, media } = props;

   useEffect(() => {
      fetch(`https://nowa.turkusowawieza.pl/wp-json/wp/v2/media/${media}`)
         .then((response) => response.json())
         .then((data) => {
            setImg({ datas: data, isLoaded: true });
         });
   }, []);

   return (
      <div className={style.post} style={{ flexDirection: props.reverse }}>
         {!img.isLoaded ? (
            <p>Loading</p>
         ) : (
            <>
               <div className={style.postPhoto}>
                  <img src={img.datas.media_details.sizes.medium_large.source_url} alt="" className={style.img} />
               </div>
               <div className={style.postText}>
                  <h3 className={style.postTitle}>{title.rendered}</h3>
                  <div className={style.content} dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
               </div>
            </>
         )}
      </div>
   );
}

export default Post;
