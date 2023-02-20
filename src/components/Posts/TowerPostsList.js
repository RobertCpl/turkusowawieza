import { useEffect, useState } from "react";
import style from "./TowerPostsList.module.css";

import TowerPost from "./TowerPost";

function TowerPostsList() {
   const [towerPosts, setTowerPosts] = useState([]);

   useEffect(() => {
      async function getPosts() {
         const response = await fetch("https://nowa.turkusowawieza.pl/wp-json/wp/v2/posts?categories=4&order=asc");
         const data = await response.json();
         setTowerPosts(data);
      }
      getPosts();
   }, []);

   let post = towerPosts.map((post, index) => {
      if (index === 2) {
         return (
            <TowerPost
               key={post.id}
               title={post.title}
               excerpt={post.excerpt}
               media={post.featured_media}
               content={post.content}
            />
         );
      }
   });

   return <div className={style.list_posts}>{post}</div>;
}
export default TowerPostsList;
