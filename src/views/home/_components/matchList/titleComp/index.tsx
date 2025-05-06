import React from "react";
import styles from "./index.module.scss";
import IconCollect from "@/components/Common/IconCollect";
import Team from "@/components/Common/team";
import UserBox from "@/components/Common/userBox";
import cs from 'classnames'
import TeamGroup from "@/components/Common/TeamGroup";
const Title: React.FC<{
  itemData: any;
  onclcik: () => void;
}> = ({ itemData, onclcik }) => {
  return (
    <div className={cs(styles.title,{[styles.isCollected]:itemData?.isCollect})}>
      <div className={styles.left}>
        <IconCollect isCollect={itemData?.isCollect} onclcik={onclcik} />
        <TeamGroup
                classNameIcon={styles.team_img}
                teamImg={itemData?.countryIcon}
                teamName={itemData?.country}
                teamNameDesc={itemData?.countryTeamDesc}
        />
      </div>
      <UserBox  iconFontType={itemData?.iconFontType} userNum={itemData?.userNum} />
    </div>
  );
};
export default Title;
