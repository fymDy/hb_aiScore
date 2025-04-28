import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import OddsBox from "../overview/oddsBox";
import PageFilter from "@/views/home/acomponents/pageFilter";
import { IFSearchResult } from "@/views/home/interface";
import CheckboxComp from "@/components/CheckboxComp";

const Odds: React.FC = () => {
  const [activeFilterId, setActiveFilterId] = useState("0");
  const [checkedList, setCheckedList] = useState<any[]>([]);
  const oddsBoxData = useMemo(() => {
    return {
      data: [
        {
          img: "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
          one: "+309",
          X: "+240",
          two: "-125",
        },
        {
          img: "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
          one: "+309",
          X: "+240",
          two: "-125",
        },
        {
          img: "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
          one: "+309",
          X: "+240",
          two: "-125",
        },
        {
          img: "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
          one: "+309",
          X: "+240",
          two: "-125",
        },
      ],
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
      { value: "0", label: "初始賠率" },
      { value: "1", label: "赛前賠率" },
    ];
  }, []);

  return (
    <div className={styles.Odds}>
      <PageFilter
        className={styles.filter_wrap}
        isFilter={false}
        filterData={filterData}
        onclick={(id: string) => setActiveFilterId(id)}
      />
      <CheckboxComp
        className={styles.checkBox_Wrap}
        options={checkboxData}
        checkedList={checkedList}
        onChange={setCheckedList}
      />
      <OddsBox data={oddsBoxData} />
    </div>
  );
};

export default Odds;
