import { useEffect, useState } from "react";
import style from "./TowerPostsList.module.css";
import arrowL from "./../../assets/images/arrowLeft.svg";
import arrowR from "./../../assets/images/arrowRight.svg";

import TowerPost from "./TowerPost";

function TowerPostsList(props) {
   const [towerPosts, setTowerPosts] = useState([]);
   let [curentIndex, setCurenIndex] = useState(0);

   useEffect(() => {
      async function getPosts() {
         const response = await fetch("https://nowa.turkusowawieza.pl/wp-json/wp/v2/posts?categories=4&order=asc");
         const data = await response.json();
         setTowerPosts(data);
      }
      getPosts();
   }, []);

   function RightClickHandler() {
      if (curentIndex >= towerPosts.length - 1) {
         return;
      }

      setCurenIndex(++curentIndex);
   }
   function LeftClickHandler() {
      if (curentIndex <= 0) {
         return;
      }
      setCurenIndex(--curentIndex);
   }

   let post = towerPosts.map((post, index) => {
      if (curentIndex === index) {
         return (
            <TowerPost
               key={post.id}
               title={post.title}
               excerpt={post.excerpt}
               media={post.featured_media}
               content={post.content}
               top={props.top}
            />
         );
      }
   });

   return (
      <div className={style.wraper}>
         <div className={style.arrowLeft} onClick={LeftClickHandler}>
            <img src={arrowL} alt="arrow left" />
         </div>
         <div className={style.list_posts}>{post}</div>
         <div className={style.arrowRight} onClick={RightClickHandler}>
            <img src={arrowR} alt="arrow right" />
         </div>
      </div>
   );
}
export default TowerPostsList;
