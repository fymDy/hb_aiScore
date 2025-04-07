
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import DetailsComp from './detailsComp';
import TitleComp from './titleComp';
export interface IFMathProps{
  dataList:any,
}
const Match: React.FC<IFMathProps> = ({dataList}) => {
      return (
        <>
                {
                  dataList?.map((item:any,i:number)=>(
                    <section key={i} className={styles.match_item}>
                        <TitleComp itemData={item} onclcik={()=>{}} />
                        <DetailsComp itemData={item} onclcik={()=>{}}/>
                    </section>
                  ))
                }
        </>
      );
    };
export default Match;
