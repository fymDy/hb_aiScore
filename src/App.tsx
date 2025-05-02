// src/App.tsx
import { LayoutSysContextProvider } from '@/provides/layoutSysProvider'; // 导入 Context Provider
import LayoutAppContextProvider from '@/provides/layoutAppProvider';
import SvgSpriteLoader from './components/SvgSpriteLoader';
import AppRouter from './router';
import { LayoytSwrProvider } from './provides/layoutSwrProvider';

function App() {

  return (
    <LayoutSysContextProvider> {/* 使用 Context Provider 包裹你的应用 */}
        <LayoutAppContextProvider>
          <LayoytSwrProvider>
              <AppRouter  />
              <SvgSpriteLoader />
            </LayoytSwrProvider>
        </LayoutAppContextProvider>
    </LayoutSysContextProvider>
  );
}

export default App;
