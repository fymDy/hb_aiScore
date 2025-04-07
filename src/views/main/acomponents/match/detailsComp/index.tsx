import React from "react";
import styles from "./index.module.scss";
import IconCollect from "@/components/Common/IconCollect";
import Team from "@/components/Common/team";
import IconBrand from "@/components/Common/IconBrand";
export interface IFDetailsProps {
  itemData: any;
  onclcik: () => void;
}

const Details: React.FC<IFDetailsProps> = ({ itemData, onclcik }) => {
  return (
    <div className={styles.details}>
      <div className={styles.left}>
        <IconCollect isCollect={itemData?.isCollectTeam} onclcik={onclcik} />
        <div className={styles.time}>
          <span className={styles.startDate}>{itemData?.startDate}</span>
          <span className={styles.seconds}>
              {itemData?.twinkle}
              <span className={styles.twinkle}>'</span>
          </span>
        </div>
      </div>
      <div className={styles.center}>
          <div>
            <Team classNameIcon={styles.team_img} teamImg={itemData?.teamAIcon} teamName={itemData?.teamAName}  />
            <Team classNameIcon={styles.team_img} teamImg={itemData?.teamBIcon} teamName={itemData?.teamBName}  />
          </div>
          <IconBrand/>
      </div>
      <div className={styles.right}>
            <span className={styles.score}>{itemData?.teamAScore}</span>
            <span className={styles.score}>{itemData?.teamBScore}</span>
      </div>
    </div>
  );
};
export default Details;
