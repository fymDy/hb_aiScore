import { useNavigatePlus } from '@/hooks/router/useNavigatePlus';
import { RouterPathUtil } from '@/router/routerPathUtil';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const LayoutApp = () => {
      const { navigatePlus } = useNavigatePlus();
      navigatePlus(RouterPathUtil.HOME)
  return null;
};

export default LayoutApp;