import React, { useMemo } from "react";
import styles from "./index.module.scss";
import LayoutOutlet from "@/layout/outlet";
import TeamHeader from "./_components/teamHeader";
import StepComp from "@/components/StepComp";
import { basketballTabs, footballTabs, mockTeamBasicInfo } from "./_types/data";
import { useLocationPlus } from "@/hooks/router/useLocationPlus";
import { useNavigatePlus } from "@/hooks/router/useNavigatePlus";
import { EnumSportType } from "../home/enum";
import { IFTab } from "../home/interface";
import cs from "classnames";

const TeamDetails: React.FC = () => {
  const { hashValue, state } = useLocationPlus();
  const { ballType } = state;
  const { navigatePlus } = useNavigatePlus();
  const tabData: IFTab[] | [] = useMemo(() => {
    let data: IFTab[];
    switch (ballType) {
      case EnumSportType.Football:
         data = footballTabs?.map((item: IFTab) => {
            return { ...item, isActive: item.id === hashValue ? true : false };
        });
        break;
     case EnumSportType.Basketball:
       data = basketballTabs?.map((item: IFTab) => {
        return { ...item, isActive: item.id === hashValue ? true : false };
      });
        break;
      default:
        data=[]
        break;
    }
    return data;  
  }, [hashValue, ballType, footballTabs, basketballTabs]);
  const stepData = {
    step1: "足球比分直播",
    step2: "中國足球乙級聯賽",
    name: "北京理工 vs 上海海港富盛经开比分動畫直播,預測(2025/04/09)",
  };
  const onClickTab = (item: any) => {
    const id = item.id;
    navigatePlus(`#${id}`, { state: state, replace: true });
  };
  return (
    <div className={cs(styles.teamDetails)}>
      <TeamHeader
        className={cs(styles.TeamHeader_Football, styles[ballType])}
        data={mockTeamBasicInfo}
        tabData={tabData}
        hashValue={hashValue}
        onClickTab={onClickTab}
        onClickBack={() => {
          navigatePlus(-1);
        }}
      />
      <StepComp
        className={styles.details_StepComp}
        step1={stepData.step1}
        step2={stepData.step2}
        name={stepData.name}
      />
      <LayoutOutlet />
    </div>
  );
};
export default TeamDetails;
