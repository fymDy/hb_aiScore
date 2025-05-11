import React from "react";
import styles from "./index.module.scss";
import Images from "../Common/Images";

const TeamLogoComp: React.FC<{
  imgSrc:string,
  name:string
  onClick?:()=>void
}> = ({imgSrc,name,onClick}) => {
  return (
      <div className={styles.TeamLogoComp} onClick={onClick}>
            <Images className={styles.logo} imgSrc={imgSrc}/>
          {  name && <span className={styles.name}>{name}</span>}
      </div>
  );
};
export default TeamLogoComp;
