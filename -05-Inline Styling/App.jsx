import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Style from './styling'
import Cart from './fonts'
import CardApp from '../main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Style />
    <Cart />
    <CardApp/>
  </StrictMode>,
)
