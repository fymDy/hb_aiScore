// src/App.tsx
import AppRouter from './router';
import { LayoutAppContextProvider } from '@/provides/layoutAppProvider'; // 导入 Context Provider
import AppLayout from '@/layout/AppLayout';
import SvgSpriteLoader from '@/components/SvgSpriteLoader';
import DownloadComp from './components/DownloadComp';
function App() {
 

  return (
    <LayoutAppContextProvider> {/* 使用 Context Provider 包裹你的应用 */}
        <AppLayout   DownloadComponent={<DownloadComp />}>
          <SvgSpriteLoader />
          <AppRouter />
        </AppLayout>
    </LayoutAppContextProvider>
  );
}

export default App;
