import React from "react";
import styles from "./index.module.scss";
import ImageComp from "@/components/imageComp";

const TeamLolo: React.FC<{
  imgSrc:string,
  name:string
}> = ({imgSrc,name}) => {
  return (
      <div className={styles.team_logo}>
            <ImageComp className={styles.logo} imgSrc={imgSrc}/>
            <span className={styles.name}>{name}</span>
      </div>
  );
};
export default TeamLolo;
