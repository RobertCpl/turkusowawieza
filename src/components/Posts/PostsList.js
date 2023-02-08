import { useEffect, useState } from "react";
import style from "./PostsList.module.css";

import Post from "./Post";

function PostsList() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      async function getPosts() {
         const response = await fetch("http://nowa.turkusowawieza.pl/wp-json/wp/v2/posts?order=asc");
         const data = await response.json();
         setPosts(data);
      }
      getPosts();
   }, []);

   let post = posts.map((post, index) => {
      if (index % 2 === 0) {
         return <Post key={post.id} title={post.title} content={post.content} media={post.featured_media} />;
      } else {
         return (
            <Post
               key={post.id}
               title={post.title}
               content={post.content}
               media={post.featured_media}
               reverse={"row-reverse"}
            />
         );
      }
   });
   return <section className={style.aboutus}>{post}</section>;
}
export default PostsList;
