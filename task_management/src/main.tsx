import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Auth0ProviderWithNavigate from './components/Auth0Provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
        <StrictMode>
          <App />
        </StrictMode>
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
)
