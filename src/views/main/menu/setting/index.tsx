
import React, { Children } from 'react';
import styles from './index.module.scss';
import { IFMatch, IFMenu } from '../../interface';
import IComp from '@/components/Common/I';
import cs from 'classnames'
import Head from '../components/head';
import Match from '../components/match';
interface IFSettingProps{
  menusData:IFMenu[],
  matchHotData:IFMatch[]
  matchData:IFMatch[]
  onClickMenu:(id:string)=>void
  children?:any
}
const Setting = ({menusData,onClickMenu,matchHotData,matchData}:IFSettingProps) => {
      return (
        <div className={styles.Setting}>
                  <ul className={styles.option_box}>
                            {
                                menusData?.map((item:IFMenu)=>{
                                  return(
                                    <li key={item.id} className={styles.item}  onClick={()=>onClickMenu(item.id)} >
                                       <IComp className={cs(styles.icon_class,item.iconClass)}  />
                                      <label className={styles.name}>{item.name}</label>
                                      <IComp className={cs(styles.icon_right,'icon-youjiantou')} />
                                    </li>
                                  )
                                },[])
                            }
                        </ul>
                        <div className={styles.com_box}>
                              <Head text='赛事'/>
                              <Match  text='热门' matchData={matchHotData}/>
                              <Match text='赛事' matchData={matchHotData}/>
                        </div>
        </div>
      );
    };

export default Setting;
