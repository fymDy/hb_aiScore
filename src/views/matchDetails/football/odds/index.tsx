import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import PageFilter from "@/views/home/_components/pageFilter";
import { IFSearchResult } from "@/views/home/interface";
import CheckboxComp from "@/components/CheckboxComp";
import OddsType from "../../_components/oddsType";
import OddsTable, { OddsData } from "../../_components/oddsTable";
import SelectNum from "@/components/Common/selectNum";
import BtnGroup from "@/components/Common/btnGroup";

const Odds: React.FC = () => {
  const [activeFilterId, setActiveFilterId] = useState("0");
  const [checkedList, setCheckedList] = useState<any[]>([]);

  const sampleData: OddsData[] =[
    {
      name: 'bet365',
      logo: "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
      defaultOdds: [-309, +300, +2200],
      initialOdds: [-400, +500, +1200],
      preMatchOdds: [+104, +260, +3200],
    },
    {
      name: '1XBET',
      logo: "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
      defaultOdds: [-200, +100, +500],
      initialOdds: [-371, +312, +2300],
      preMatchOdds: [+110, +225, +214],
    },
    {
      name: 'CrownBet',
      logo: "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
      defaultOdds: [-200, +100, +500],
      initialOdds: [-371, +312, +2300],
      preMatchOdds: [+110, +225, +214],
    },
    {
      name: 'Bookmaker',
      logo: "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
      defaultOdds: [-200, +100, +500],
      initialOdds: [-371, +312, +2300],
      preMatchOdds: [+110, +225, +214],
    }
  ]
  const oddsTypeData = useMemo(() => {
    return {
      hint: "Gamble Responsibly. Gambling Therapy. 18+",
      odds: [
        {
          name: "初始賠率",
          value: "1:3",
        },
        {
          name: "賽前賠率",
          value: "1:2",
        },
        {
          name: "賽中賠率",
          value: "3:1",
        },
      ],
    };
  }, []);
  const filterData: IFSearchResult[] = useMemo(() => {
    const data = [
      {
        id: "0",
        name: "1x2",
        isActive: activeFilterId === "0",
      },
      {
        id: "1",
        name: "亚盘",
        isActive: activeFilterId === "1",
      },
      {
        id: "2",
        name: "大小球",
        isActive: activeFilterId === "2",
      },
      {
        id: "3",
        name: "角球",
        isActive: activeFilterId === "3",
      },
    ];

    return data;
  }, [activeFilterId]);

  const checkboxData = useMemo(() => {
    return [
      { value: "initialOdds", label: "初始賠率" },
      { value: "preMatchOdds", label: "赛前賠率" },
    ];
  }, []);

  return (
    <div className={styles.Odds}>
      <BtnGroup
        className={styles.btnGroupr_wrap}
        dataList={filterData}
        onclick={(id: string) => setActiveFilterId(id)}
      />
      <CheckboxComp
        className={styles.checkBox_Wrap}
        options={checkboxData}
        checkedList={checkedList}
        onChange={setCheckedList}
      />
      <OddsTable data={sampleData} selectedTypes={checkedList} onArrowClick={(v:string)=>alert(v)} />
      <OddsType data={oddsTypeData} />
    </div>
  );
};

export default Odds;
