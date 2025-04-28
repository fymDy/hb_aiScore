import React, { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";
import OddsBox from "../overview/oddsBox";
import Infomation from "../overview/infomation";
import PageFilter from "@/views/home/acomponents/pageFilter";
import { IFSearchResult } from "@/views/home/interface";
import Input from "@/components/Common/Input";
import Checkbox from "@/components/Common/checkbox";


const Odds: React.FC = () => {
 
     const [activeFilterId, setActiveFilterId] = useState("0");
     const [checkedId, setCheckedId] = useState('');
    const oddsBoxData = useMemo(() => {
      return {
        
        data:[
          {
            img:  "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
            one: '+309',
            X: "+240",
            two: "-125", 
          },{
            img:  "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
            one: '+309',
            X: "+240",
            two: "-125", 
          },{
            img:  "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
            one: '+309',
            X: "+240",
            two: "-125", 
          },{
            img:  "https://img1.aiscore.com/other/fe8aec51afeb2de633c9.png",
            one: '+309',
            X: "+240",
            two: "-125", 
          }
        ],
        hint:'Gamble Responsibly. Gambling Therapy. 18+',
        odds:[
          {
            name:'初始賠率',
            value:'1:3'
          },
          {
            name:'賽前賠率',
            value:'1:2'
          },
          {
            name:'賽中賠率',
            value:'3:1'
          }
        ],
  
      }
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
    const checkboxData=useMemo(()=>{
        return [
          {id:'0',name:'初始賠率',checked:checkedId=='0'?true:false},
          {id:'1',name:'赛前賠率',checked:checkedId=='1'?true:false}
        ]
    },[checkedId])
    const onChangeChecked=(id:string)=>{
      if(id===checkedId){
        setCheckedId('')
      }else{
        setCheckedId(id)
      }
    
    }
  return (
    <div className={styles.Odds}>
            <div className={styles.filter_wrap}>
            <PageFilter
              isFilter={false}
              filterData={filterData}
              onclick={(id: string) => setActiveFilterId(id)}
            />
            </div>
                <div className={styles.checkBox_Wrap}>
                  {
                    checkboxData?.map((item:any)=>(
                      <Checkbox key={item.id} className={styles.checkBox_item}
                      id={item.id}
                      checked={item.checked}
                      onChange={onChangeChecked}
                      label={item.name}
                    />
                    ))
                  }
                 
              </div>
     <OddsBox data={oddsBoxData}/>
    </div>
  );
};

export default Odds;
