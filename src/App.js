import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home'
import Details from './components/itemDetais/Details';
function App() {

  return (
    <BrowserRouter>
<div className="App">
  <Header/>
  <Home/>
   <Routes>
    {/* <Route path='/ecommerce' element={<Home/>}/> */}
    {/* <Route path='/cart' element={<Cart/>}/> */}
    <Route path="/product-details" element={<Details/>}/>
   </Routes>
  
</div>
    </BrowserRouter>
    
  );
}

export default App;
