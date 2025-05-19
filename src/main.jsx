import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App'
import { MemoryRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)

// 3 Types of Routers
// a. BrowserRowter -Synonymous to the browser operations
// b. HashRouter - Represents paths as url fragments (#)
// c. MemoryRouter - Stores URLs in memory (Does not obey browser actions)