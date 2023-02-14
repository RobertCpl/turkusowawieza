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
      <div className={style.wraper} style={{ flexDirection: props.reverse }}>
         {!img.isLoaded ? (
            <p>Loading</p>
         ) : (
            <>
               <div className={style.photo}>
                  <img src={img.datas.media_details.sizes.medium_large.source_url} alt="" className={style.img} />
               </div>
               <div className={style.box}>
                  <h3 className={style.title}>{title.rendered}</h3>
                  <div className={style.text} dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
               </div>
            </>
         )}
      </div>
   );
}

export default Post;
