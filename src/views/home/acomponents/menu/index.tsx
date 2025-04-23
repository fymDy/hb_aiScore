
/*
 * @Author: Mark
 * @Date: 2025-04-06 22:08:24
 * @LastEditTime: 2025-04-22 17:21:18
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/home/acomponents/menu/index.tsx
 */
import { useMemo, useState } from "react";
import { IFMatch, IFMenu } from "../../interface";
import styles from './index.module.scss';
import Setting from "./setting";
import Language from "./language";
import Time from "./time";
import OddsFormat from "./oddsFormat";
import Head from "./components/head";
import { RouterPathUtil } from "@/router/routerPathUtil";
import { useNavigatePlus } from "@/hooks/router/useNavigatePlus";
interface IFMenuProps{
  onclick:(id:string)=>void
}
const Menu: React.FC<IFMenuProps> = ({onclick}) => {
const {navigatePlus} = useNavigatePlus();
    const [currentId,setCurrentId]=useState('0')
    const [currentName,setCurrentName]=useState('设定')
    const menusData:IFMenu[]=useMemo(()=>{
      return [
        {
          id:'1',
          iconClass:'icon-Mzhan-shezhi-qiehuanyuyan',
          name:'语言'
        }, {
          id:'2',
          iconClass:'icon-Mzhan-shezhi-shiqu',
          name:'时区'
        }, {
          id:'3',
          iconClass:'icon-Mzhan-shezhi-peishuaiyangshi',
          name:'赔率格式'
        }, {
          id:'4',
          iconClass:'icon-Mzhan-shezhi-xihuan',
          name:'收藏'
        },
      ]
    },[])
    const matchHotData:IFMatch[]=useMemo(()=>{
      return  [
        {id:'0',iconImg:'https://img1.aiscore.com/country/1552909490161265.png!w60',name:'欧洲赛冠军'},
        {id:'1',iconImg:'https://img1.aiscore.com/country/1552909490161265.png!w60',name:'歐足協歐洲協會聯賽'},
        {id:'2',iconImg:'https://img1.aiscore.com/country/64f607906be7598a02d75dbc1e979662.png!w60',name:'英格蘭超級聯賽'},
        {id:'3',iconImg:'https://img1.aiscore.com/country/907eba32d950bfab68227fd7ea22999b.png!w60',name:'西班牙甲级聯賽'},
        {id:'4',iconImg:'https://img1.aiscore.com/country/1007e1b7f894dfbf72a0eaa80f3bc57e.png!w60',name:'意大利甲级聯賽'},
      ]
    },[])
    const matchData:IFMatch[]=useMemo(()=>{
      return  [
        {id:'0',iconImg:'https://img1.aiscore.com/country/a00c273f0f497484093fa94865cf5ca5.png!w60',name:'阿美尼亞'},
        {id:'1',iconImg:'https://img1.aiscore.com/country/1552909490161265.png!w60',name:'国际'},
        {id:'2',iconImg:'https://img1.aiscore.com/country/1552909490161265.png!w60',name:'欧洲'},
        {id:'3',iconImg:'https://img1.aiscore.com/country/1552909490161265.png!w60',name:'亚洲'},
        {id:'4',iconImg:'https://img1.aiscore.com/country/e65a0ed0e39dd14a9e5af441efb09b37.png!w60',name:'不丹'},
        {id:'5',iconImg:'https://img1.aiscore.com/country/b78edab0f52e0d6c195fd0d8c5709d26.png!w60',name:'冰岛'},
        {id:'6',iconImg:'https://img1.aiscore.com/country/9986531359550785caffb2032622437f.png!w60',name:'塞内加尔'},
      ]
    },[])
  
    
  
    const onclickItem=(i:string)=>{
        if(i=='4'){
            onclick('fav')
            navigatePlus(RouterPathUtil.HOME_FAVORITE)
        }else{
          setCurrentId(i)
          const slectedItem= menusData?.filter(item=>item.id===i)?.[0]
          setCurrentName(slectedItem?.name ?? '设定') 
        }
    }
  
        return (
          <div className={styles.menu}>
              <Head text={currentName}  showBack={currentId=='0'?false:true} showClose={true}
                onClickBack={()=>onclickItem('0') }
                  onClickClose={()=>onclick('close')}
           />
                       {currentId=='0' && <Setting menusData={menusData} matchHotData={matchHotData} matchData={matchData} onclick={(id:string)=>onclickItem(id)}/>}
                       {currentId=='1' && <Language/>}
                       {currentId=='2' && <Time/> }
                       {currentId=='3' && <OddsFormat/>}    
          </div>
        );
      };
  
  export default Menu;