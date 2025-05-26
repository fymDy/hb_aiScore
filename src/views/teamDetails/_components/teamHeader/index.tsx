import React from "react";
import styles from "./index.module.scss";
import TeamTitleComp from "@/components/TeamTitleComp";
import cs from "classnames";
import TeamLogoComp from "@/components/TeamLogoComp";
import { TeamBasicInfo } from "../../_types";
import PlayerComp from "@/components/PlayerComp";
import ISpan from "@/components/Common/ISpan";
import TabsComp from "@/components/TabsComp";
import { IFTab } from "@/views/home/interface";

const TeamHeader: React.FC<{
  tabData:IFTab[],
  data:TeamBasicInfo,
  onClickBack: () => void,
  onClickTab:(item:IFTab)=>void,
  className?:string,
  hashValue?:string,
}> = ({tabData,data,hashValue,className,onClickTab,onClickBack }) => {
  return (
    <div className={cs(styles.TeamHeader,className)}>
      <TeamTitleComp onClick={onClickBack} />
      <div className={styles.content}>
          <TeamLogoComp imgSrc={data?.logoUrl} name={data?.name_zh}  />
        <div className={styles.country_info}>
            <PlayerComp  className={styles.PlayerComp}
                                classPlayerLogo={styles.PlayerLogo}
                                classPlayerName={styles.PlayerName}
                                logo={data?.countryLogo }
                                name={data?.country}
                                />
                <ISpan className={styles.marketValue} name={`/${data?.marketValue}`} />                
        </div>
      </div>
       <TabsComp
        className={styles.TabsComp}
        classNameText={styles.classNameText}
        classNameActiveText={styles.item_active}
          classNameActiveLine={styles.item_activeLine}
        activeTab={hashValue}
        tabData={tabData}
        onClick={onClickTab}
      />
    </div>
  );
};
export default TeamHeader;
