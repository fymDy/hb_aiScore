
import React, { useMemo, useState } from 'react';
import styles from './index.module.scss';
import DetailsComp from './detailsComp';
import TitleComp from './titleComp';
import { RouterPathUtil } from '@/router/routerPathUtil';
 interface IFMathProps{
  activeTabPath:RouterPathUtil,
  dataList:any,
  onclcikCollect:(id:string)=>void
  onclcikCollectItem:(id:string,matchId:string)=>void
  onClickJumpPage:(item:any)=>void
}
const MatchList: React.FC<IFMathProps> = ({activeTabPath,dataList,onclcikCollect,onclcikCollectItem,onClickJumpPage}) => {
  console.log(1)
      return (
        <>
                {
                  dataList?.map((item:any,i:number)=>(
                    <section key={i} className={styles.match_item}>
                        <TitleComp itemData={item} onclcik={()=>{onclcikCollect(item?.id)}} />
                          {
                            item?.data?.map((itemMatch:any,_i:number)=>(
                              <DetailsComp key={_i} itemData={itemMatch} onclcik={()=>onclcikCollectItem(item?.id,itemMatch?.id)} onClickJumpPage={()=>onClickJumpPage({activeTabPath,itemMatch})} />
                            ))
                          }
                    </section>
                  ))
                }
        </>
      );
    };
export default MatchList;
