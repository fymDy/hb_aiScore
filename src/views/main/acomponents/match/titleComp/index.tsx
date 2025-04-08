import React from "react";
import styles from "./index.module.scss";
import IconCollect from "@/components/Common/IconCollect";
import Team from "@/components/Common/team";
import UserBox from "@/components/Common/userBox";
import { IFDetailsProps } from "../detailsComp";
import cs from 'classnames'
const Title: React.FC<IFDetailsProps> = ({ itemData, onclcik }) => {
  return (
    <div className={cs(styles.title,{[styles.isCollected]:itemData?.isCollect})}>
      <IconCollect id={itemData?.id} isCollect={itemData?.isCollect} onclcik={onclcik} />
      <Team  teamImg={itemData?.countryIcon} teamName={itemData?.country} teamNameDesc={itemData?.countryTeamDesc}></Team>
      <UserBox iconFontType={itemData?.iconFontType} userNum={itemData?.userNum} />
    </div>
  );
};
export default Title;
