import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { IFSearchResult } from "@/views/home/interface";
import League from "./league";
import {
  mockLeagueSeasons,
  mockStandingData,
  standingsGrouped,
  standingTableHeaders,
} from "./_types/data";
import {
  LeagueGroup,
  LeagueSeasonOption,
  StandingFilter,
  StandingTeam,
  TeamStanding,
} from "./_types";
import Popup from "@/components/Common/Popup";
import SeasonSelector from "./_components/SeasonSelector";
import SeasonFilter from "./_components/SeasonFilter";
import BtnGroup from "@/components/Common/btnGroup";

const Standings: React.FC = () => {
  const [activeFilterId, setActiveFilterId] = useState<string>("all");

  const [visible, setVisible] = useState(false);
  const [seasons, setSeasons] = useState(mockLeagueSeasons);

  const filterData: IFSearchResult[] = useMemo(() => {
    const data = [
      {
        id: "all",
        name: "全部",
        isActive: activeFilterId === "all",
      },
      {
        id: "home",
        name: "主場",
        isActive: activeFilterId === "home",
      },
      {
        id: "away",
        name: "客場",
        isActive: activeFilterId === "away",
      },
    ];
    return data;
  }, [activeFilterId]);



  const handleSelect = (selected: LeagueSeasonOption) => {
    setSeasons(seasons.map((s) => ({ ...s, active: s.id === selected.id })));
    setVisible(false);
  };

  const seasonData = useMemo(() => {
    return seasons?.filter((item) => item.active)?.[0];
  }, [seasons]);

  const onclickFilter = (id: string) => {
    setActiveFilterId(id);
  };

  return (
    <article className={styles.Standings}>
      <SeasonFilter
        logo={seasonData.logo}
        name={seasonData.name}
        onClick={() => setVisible(!visible)}
      />
      <BtnGroup
        className={styles.btnGroupr_wrap}
        dataList={filterData}
        onclick={onclickFilter}
      />
      <League
         activeFilterId={activeFilterId}
        headerColumn={standingTableHeaders}
        groupsData={mockStandingData?.groups}
      />
      <Popup
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={() => {
          console.log("已确认切换");
          setVisible(false);
        }}
        cancelText="取消"
        // confirmText=""
        position="bottom" // ⬅️ 支持 top / center
      >
        <SeasonSelector seasons={seasons} onSelect={handleSelect} />
      </Popup>
    </article>
  );
};

export default Standings;
