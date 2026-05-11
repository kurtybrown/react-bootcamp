import { StrictMode } from 'react'
import GifsApp from './GifsApp'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp></GifsApp>
  </StrictMode>,
)
