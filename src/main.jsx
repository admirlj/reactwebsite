import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style/reset.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <p>Link shoould be blue</p>
  </StrictMode>,
)
