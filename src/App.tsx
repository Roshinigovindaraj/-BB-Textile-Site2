import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import BridalCollection from '@/pages/BridalCollection'
import SareeCategoryPage from '@/pages/SareeCategoryPage'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Saree category pages — /sarees/:slug */}
        <Route path="/sarees/:slug" element={<SareeCategoryPage />} />

        {/* Collection pages */}
        <Route path="/bridal"   element={<BridalCollection />} />

        {/* Remaining collections — same SareeCategoryPage pattern reused as placeholders */}
        {/* Add dedicated pages later; for now redirect unknown to home via wildcard */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}
