import React from "react";
import styles from "./index.module.scss";
import cs from 'classnames'
import Images from "../Images";
const Team: React.FC<{
  teamImg: string;
  teamName:  string;
  teamNameDesc?:string,
  classNameIcon?:  string;
}> = ({ classNameIcon='',teamNameDesc='',teamImg, teamName }) => {
  return (
      <div className={cs(styles.team_box)}>
        <div className={cs(classNameIcon,styles.team_img)}>
          <img className={styles.img} src={teamImg} />
        </div>
        <span className={styles.team_name}>{teamName}</span>
        {teamNameDesc && <span className={styles.team_name}>{teamNameDesc}</span>}
      </div>
  );
};
export default Team;