import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewApp from './New.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <NewApp /> */}
  </StrictMode>,
)
