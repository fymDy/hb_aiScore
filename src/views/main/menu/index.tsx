
import React, { useState } from 'react';
import styles from './index.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Setting from '../setting';
import { RouterPathUtil } from '@/router/routerPathUtil';
import Language from './language';
import Time from './time';

const Menu: React.FC = () => {
  const  state:any = useParams()
  const navigate= useNavigate()
  const [activeIndex,setActiveIndex]=useState(state.type)
  const click=(i:string)=>{
    setActiveIndex(i)
    navigate(`${RouterPathUtil.MAIN_MENU}/${i}`,{state:{
      type:i
    }})
  }
      return (
        <div className={styles.menu}>
          <button onClick={()=>click('0')}>
            <h5 style={{margin:'20px'}}>返回</h5>
          </button>
                     {activeIndex=='1' && <Setting/>}
                     {activeIndex=='2' && <Language/>}
                     {activeIndex=='3' && <Time/>}
                    
                  {activeIndex=='0' && 
                          <div>
                             <h1 onClick={()=>click('1')}>设定</h1>
                            <h1 onClick={()=>click('2')}>语言</h1>
                            <h1 onClick={()=>click('3')}>时区</h1>
                          </div>
                  }    
        </div>
      );
    };

export default Menu;
