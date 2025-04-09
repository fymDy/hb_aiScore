
import React, { Children } from 'react';
import styles from './index.module.scss';
import { IFMatch, IFMenu } from '../../interface';
import IComp from '@/components/IComp';
import cs from 'classnames'
import Head from '../components/head';
import Match from '../components/match';
import OptionBox from '@/views/main/acomponents/ballList';
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
                        <OptionBox  className={styles.font_size} menusData={menusData} onClickMenu={onClickMenu} />
                        <div className={styles.com_box}>
                              <Head text='赛事'/>
                              <Match  text='热门' matchData={matchHotData}/>
                              <Match text='赛事' matchData={matchData}/>
                        </div>
        </div>
      );
    };

export default Setting;
