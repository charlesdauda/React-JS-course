import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './main.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import MainContent  from './maincontent.jsx'
import WelcomeMessage from './welcomemessage.jsx'
import JSXRules from './jsxrules.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Footer />
    <MainContent />
    <WelcomeMessage />
    <JSXRules />
  </StrictMode>,
)