import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@/assets/styles/normalize8.css'
import '@/assets/styles/global.scss'
import '@/assets/styles/theme.scss'
import '@/assets/styles/index.scss'

createRoot(document.getElementById('root')!).render(
     <App />

)
