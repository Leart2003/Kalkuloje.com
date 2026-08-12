import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Link, Route } from 'react-router'

import Dogana from './Components/Dogana.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Route path="/kalkulo-doganen" element={<Dogan />} />
  </StrictMode>,
)
