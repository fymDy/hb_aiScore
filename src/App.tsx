// src/App.tsx
import AppRouter from './router';
import { LayoutContextProvider } from '@/components/LayoutContext'; // 导入 Context Provider
import SvgSpriteLoader from '@/components/SvgSpriteLoader';
function App() {
  return (
    <LayoutContextProvider> {/* 使用 Context Provider 包裹你的应用 */}
         <SvgSpriteLoader />
        <AppRouter />
    </LayoutContextProvider>
  );
}

export default App;
