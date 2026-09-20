import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner';
import UserContext from './context/UserContext.jsx';
import Header from './components/Header.jsx'
import Loader from './components/Loader.jsx'
import LoaderContext from './context/LoaderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <LoaderContext>
        <BrowserRouter>
          <Toaster position="top-right" />
          <Loader />
          <Header />
          <App />
        </BrowserRouter>
      </LoaderContext>
    </UserContext>
  </StrictMode>,
)
