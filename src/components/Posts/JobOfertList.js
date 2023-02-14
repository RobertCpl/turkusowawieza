import style from "./JobOfertList.module.css";
import JobOfert from "./JobOfert";

function JobOfertList() {
   return (
      <div className={style.wraper}>
         <JobOfert />
         <JobOfert />
         <JobOfert />
      </div>
   );
}
export default JobOfertList;
