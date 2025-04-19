// src/App.tsx
import AppRouter from './router';
import { LayoutSysContextProvider } from '@/provides/layoutSysProvider'; // 导入 Context Provider
import LayoutAppContextProvider from '@/provides/layoutAppProvider';
import SvgSpriteLoader from './components/SvgSpriteLoader';

function App() {
 

  return (
    <LayoutSysContextProvider> {/* 使用 Context Provider 包裹你的应用 */}
        <LayoutAppContextProvider>
          <AppRouter />
           <SvgSpriteLoader />
        </LayoutAppContextProvider>
    </LayoutSysContextProvider>
  );
}

export default App;
