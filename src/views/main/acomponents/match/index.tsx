
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import DetailsComp from './detailsComp';
import TitleComp from './titleComp';
export interface IFMathProps{
  dataList:any,
  onclcikCollect:(id:string)=>void
  onclcikCollectTeam:(id:string)=>void
}
const Match: React.FC<IFMathProps> = ({dataList,onclcikCollect,onclcikCollectTeam}) => {
      return (
        <>
                {
                  dataList?.map((item:any,i:number)=>(
                    <section key={i} className={styles.match_item}>
                        <TitleComp itemData={item} onclcik={onclcikCollect} />
                        <DetailsComp itemData={item} onclcik={onclcikCollectTeam} />
                    </section>
                  ))
                }
        </>
      );
    };
export default Match;
