import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './main.jsx'
import Portfolio from './portfolio.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profile />
    <Portfolio />
  </StrictMode>,
)

