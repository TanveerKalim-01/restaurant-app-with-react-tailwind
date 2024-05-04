import Header from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Header/>} >
            <Route index element = {<Home/>} />
            <Route path="menu-page" element = {<div>menu page</div>}/>
            <Route path="faq-page" element = {<div>FAQ page</div>}/>
            <Route path="about-page" element={<div >About page</div>} />
            <Route path="gift-cards-page" element = {<div>Gft Card page</div>} />
            <Route path="contact-page" element={<div >Contact page</div>} />
            <Route path="location-page" element= {<div>Location Page</div>}/>
            <Route path="search-page" element = {<div>Search page</div>} />
            <Route path="login-page" element={<div>login page</div>}/>
            <Route path="cart-page" element={<div>My Cart</div>}/>
          </Route>    
      </Routes>
    </BrowserRouter>
  )
}