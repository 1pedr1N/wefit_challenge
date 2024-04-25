import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/globalStyles'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import App from './routes'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
  <Router> 
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
  </Router>
  </CartProvider>,
)
