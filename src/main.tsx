import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@/assets/styles/normalize8.css'
import '@/assets/styles/font.scss'
import '@/assets/styles/animation.scss'
import '@/assets/styles/index.scss'

createRoot(document.getElementById('root')!).render(
     <App />
)
