import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import BridalCollection from '@/pages/BridalCollection'
import BanarasiCollection from '@/pages/BanarasiCollection'
import SareeCategoryPage from '@/pages/SareeCategoryPage'
import ProductDetailPage from '@/pages/ProductDetailPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sarees/:slug" element={<SareeCategoryPage />} />
        <Route path="/bridal"   element={<BridalCollection />} />
        <Route path="/banarasi" element={<BanarasiCollection />} />
        <Route path="/product/:categorySlug/:productIndex" element={<ProductDetailPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}
