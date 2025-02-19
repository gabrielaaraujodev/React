import { createRoot } from 'react-dom/client'
import App from '/src/App.jsx'
import {FetchData} from './FetchData'

createRoot(document.getElementById('root')).render(
  
  <FetchData>
    <App />
  </FetchData>
)
