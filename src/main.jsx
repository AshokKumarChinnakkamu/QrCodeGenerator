import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QRcode from './QRcode'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QRcode/> 
  </StrictMode>,
)
