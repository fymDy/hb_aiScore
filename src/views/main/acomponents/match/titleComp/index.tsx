import React, { useMemo, useState } from "react";
import styles from "./index.module.scss";
import IconCollect from "@/components/Common/IconCollect";
import Team from "@/components/Common/team";
import UserBox from "@/components/Common/userBox";
import { IFDetailsProps } from "../detailsComp";

const Title: React.FC<IFDetailsProps> = ({ itemData, onclcik }) => {
  return (
    <div className={styles.title}>
      <IconCollect isCollect={itemData?.isCollect} onclcik={onclcik} />
      <Team  teamImg={itemData?.countryIcon} teamName={itemData?.country} teamNameDesc={itemData?.countryTeamDesc}></Team>
      <UserBox iconFontType={itemData?.iconFontType} userNum={itemData?.userNum} />
    </div>
  );
};
export default Title;
