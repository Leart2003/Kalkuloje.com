import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import Dogana from './Components/Dogana.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dogana />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
