import { useNavigatePlus } from '@/hooks/router/useNavigatePlus';
import { RouterPathUtil } from '@/router/routerPathUtil';
import { useEffect } from 'react';

const LayoutApp = () => {
      const { navigatePlus } = useNavigatePlus();
      useEffect(()=>{
        navigatePlus && navigatePlus(RouterPathUtil.HOME)
      },[navigatePlus])
  return null;
};

export default LayoutApp;