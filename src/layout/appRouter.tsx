import { useNavigatePlus } from '@/hooks/router/useNavigatePlus';
import { RouterPathUtil } from '@/router/routerPathUtil';
import { useEffect } from 'react';
import { Outlet } from 'react-router';

const LayoutApp = () => {
      const { navigatePlus } = useNavigatePlus();
      useEffect(()=>{
        navigatePlus && navigatePlus(RouterPathUtil.HOME_FOOTBALL)
      },[navigatePlus])
  return <>
          <><Outlet/></>
        </>;
};

export default LayoutApp;