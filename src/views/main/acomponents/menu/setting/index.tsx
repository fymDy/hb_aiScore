
import styles from './index.module.scss';
import cs from 'classnames'
import Head from '../components/head';
import Match from '../components/match';
import { IFMatch, IFMenu } from '@/views/main/interface';
import OptionItem from '../components/optionItem';
interface IFSettingProps{
  menusData:IFMenu[],
  matchHotData:IFMatch[]
  matchData:IFMatch[]
  onclick:(id:string)=>void
  children?:any
}
const Setting = ({menusData,onclick,matchHotData,matchData}:IFSettingProps) => {
      return (
        <div className={styles.Setting}>
                        <OptionItem  className={styles.font_size} dataList={menusData} onclick={onclick} />
                        <div className={styles.com_box}>
                              <Head text='赛事'/>
                              <Match  text='热门' matchData={matchHotData}/>
                              <Match text='赛事' matchData={matchData}/>
                        </div>
        </div>
      );
    };

export default Setting;
