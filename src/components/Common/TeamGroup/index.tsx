import React from "react";
import styles from "./index.module.scss";
import cs from 'classnames'
import ImageComp from "@/components/imageComp";
import ISpan from "../ISpan";
const TeamGroup: React.FC<{
  teamImg: string;
  teamName:  string;
  teamNameDesc?:string,
  classNameIcon?:  string;
}> = ({ classNameIcon='',teamNameDesc='',teamImg, teamName }) => {
  return (
      // <div className={cs(styles.TeamGroup)}>
            <ImageComp className={cs(classNameIcon,styles.TeamGroup)} imgSrc={teamImg}>
              <ISpan className={styles.team_name} name={teamName}></ISpan>
              {teamNameDesc &&<ISpan className={styles.team_name} name={teamNameDesc}></ISpan>}
          </ImageComp>
    // </div>
  );
};
export default TeamGroup;