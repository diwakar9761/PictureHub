import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner';
import UserContext from './context/UserContext.jsx';
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Header />
        <App />
      </BrowserRouter>
    </UserContext>
  </StrictMode>,
)
