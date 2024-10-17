import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/header/Navbar'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound';
import Products from './pages/Products';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact-us' element={<ContactUs />} />
              <Route path='/product' element={<Products />} />
              <Route path='*' element={<PageNotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
