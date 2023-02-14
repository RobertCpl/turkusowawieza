import style from "./RecruitmentPost.module.css";

function RecruitmentPost(props) {
   return (
      <div className={style.wraper}>
         <h3 className={style.title}>{props.title}</h3>
         <p className={style.text}>{props.text}</p>
      </div>
   );
}
export default RecruitmentPost;
